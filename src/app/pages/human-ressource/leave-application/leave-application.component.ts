import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import * as moment from 'moment';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.scss']
})
export class LeaveApplicationComponent implements OnInit {

  leaveApps: any[] = [];
  leaveCats: any[] = [];
  employees: any[] = [];
  designations: any[] = [];
  leaveForm: FormGroup;
  editLeaveForm: FormGroup;
  selectedLeave: any;
  isLoading: boolean;
  fileData: any;

  constructor(private api: ApiService, private toastr: ToastrService)
  {
    this.leaveForm = new FormGroup({
      toDate: new FormControl<Date | null>(null, [Validators.required]),
      fromDate: new FormControl<Date | null>(null, [Validators.required]),
      leaveType: new FormControl("select", [Validators.required]),
      employee: new FormControl("select", [Validators.required]),
      reason: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getLeaveApplication();
    this.getLeavesCategory();
  }

  getLeaveApplication()
  {
    this.api.getLeaveApplication().subscribe(resp => {
      this.leaveApps = resp.leavesRequest;
      this.leaveApps = this.leaveApps.filter(leave => leave.employee || leave.student);
      this.mapStudentClass();
    });
  }

  mapStudentClass()
  {
    const observables: Observable<any>[] = [];
    observables.push(this.api.getAllAcademic());
    observables.push(this.api.getAllClass());
    observables.push(this.api.getAllSection());

    let academics = [], classes = [], sections = [];
    forkJoin(observables).subscribe(response => {
      academics = response[0].academics;
      classes = response[1].classes;
      sections = response[2].sections;

      academics.forEach(academic => {
        if(academic.studentClass) {
          academic.studentClass = classes.find(c => c._id === academic.studentClass);
        }

        if(academic.section) {
          academic.section = sections.find(s => s._id === academic.section);
        }
      });

      this.leaveApps.forEach(leave => {
        if(leave.student) {
          leave.student.academic = academics.find(a => a._id === leave.student.academic);
        }
      })

      console.log(this.leaveApps);
    });
  }

  getLeavesCategory()
  {
    this.api.getLeaveCategory().subscribe(resp => {
      this.leaveCats = resp.leavesCategory;
      this.getEmployees();
    });
  }

  getEmployees()
  {
    this.api.getAllEmployees().subscribe(resp => {
      this.employees = resp.employees;
    });
  }

  onFilesDropped(files: NgxFileDropEntry[])
  {
    console.log(files);
    if(files.length > 1) {
      alert('Please upload a single file');
    }
    else
    {
      for(const droppedFile of files) {
        if(droppedFile.fileEntry.isFile)
        {
          const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
          fileEntry.file((file: File) => {
            this.fileData = file;
          })
        }
      }
    }
  }

  addLeaveRequest()
  {
    this.isLoading = true;

    let postData = new FormData();
    postData.append("toDate", moment(this.leaveForm.value.toDate).format("MM-DD-yyyy"));
    postData.append("fromDate", moment(this.leaveForm.value.fromDate).format("MM-DD-yyyy"));
    postData.append("leaveType", this.leaveForm.value.leaveType);
    postData.append("employee", this.leaveForm.value.employee);
    postData.append("reason", this.leaveForm.value.reason);
    if(this.fileData) {
      postData.append("file", this.fileData);
    }

    console.log(postData);

    this.api.addLeaveRequest(postData).subscribe(resp => {
      this.isLoading = false;
      this.toastr.success(resp.message, "Leave request add success");
      this.leaveForm.reset();
      this.fileData = null;
      this.getLeaveApplication();
    },
    (err) => {
      this.isLoading = false;
      this.toastr.error(err, "Leave request add failed");
    })
  }

  deleteLeave()
  {
    this.isLoading = true;
    this.api.deleteLeaveRequest(this.selectedLeave._id).subscribe(resp => {
      console.log(resp);
      this.isLoading = false;
      document.getElementById('modalDismissBtn')?.click();
      this.getLeaveApplication();
    },
    (err) => {
      this.isLoading = false;
      console.error(err);
    })
  }
}
