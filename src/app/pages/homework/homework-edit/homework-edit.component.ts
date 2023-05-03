import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { HomeworkService } from '../homework.service';

@Component({
  selector: 'app-homework-edit',
  templateUrl: './homework-edit.component.html',
  styleUrls: ['./homework-edit.component.scss']
})
export class HomeworkEditComponent {
  sections: any[] = [];
  classes: any[] = [];
  subjects: any[] = [];
  homeWorkForm: FormGroup;
  homeWorkId: any;
  row:any;
  aceYear = [{ _id: "2020-2021", name: "2020-2021" }, { _id: "2021-2022", name: "2021-2022" }, { _id: "2022-2023", name: "2022-2023" }];
  constructor( public fb: FormBuilder,public router: Router,  private route: ActivatedRoute,private api: ApiService,
    private toastr: ToastrService,private homeworkService: HomeworkService) {
    route.params.subscribe(param => {
      this.homeWorkId = param['id'];
     
    });
    this.row = this.homeworkService.editHomeWorkData;
  }
  ngOnInit() {
    
    this.createForm();
    this.getAllClass();
    this.getAllSection();
    this.getSubject();
  }
  createForm(){
    console.log(this.row);
    this.homeWorkForm = this.fb.group({
      id:[this.homeWorkId],
      studentClass: [this.row?.academic?.studentClass, Validators.required],
      section: [this.row?.academic?.section, Validators.required],
      subject: [this.row?.subject?._id, Validators.required],
      academicYear: [this.row?.academic?.academicYear, Validators.required],
      homeWorkDate:[this.row?.dateOfHomework, Validators.required],
      submissionDate:[this.row?.dateOfSubmission, Validators.required],
      scheduleDate:[this.row?.scheduleDate, Validators.required],
      attachement:[''],
      description:[this.row?.description,Validators.required],
      smsNotification:[false]
    });
  }
 
  getAllSection() {
    this.api.getAllSection().subscribe(resp => {
      this.sections = resp.sections
    });
  }
  getSubject() {
    this.api.getAllSubjects().subscribe(resp => {
      this.subjects = resp.subjects
    });
  }
  getAllClass() {
    this.api.getAllClass().subscribe(resp => {
      this.classes = resp.classes
    });
  }
  submitDate(formData:any){
    const payload ={
      academicYear : formData.value.academicYear,
      studentClass: formData.value.studentClass, 
      section: formData.value.section, 
      subject:formData.value.subject,  
      dateOfHomework:formData.value.homeWorkDate,
      dateOfSubmission: formData.value.submissionDate, 
      scheduleDate:formData.value.scheduleDate,
      description:formData.value.description,
      smsNotification:formData.value.smsNotification,
      file:formData.value.attachement,
      homeworkId:formData.value.id
    }
    this.api.updateHomeWork(payload).subscribe(resp => {
      this.toastr.success(resp[0]['msg'], "Updated success");
      this.router.navigate(['/homework/list']);
    },
    (err) => {
      this.toastr.error(err, " update failed");
      console.error(err);
    })
  }
}