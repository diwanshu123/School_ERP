import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {
  sections: any[] = [];
  classes: any[] = [];
  reportForm: FormGroup;
  reportData: any[];
  aceYear = [{ _id: "2020-2021", name: "2020-2021" }, { _id: "2021-2022", name: "2021-2022" }, { _id: "2022-2023", name: "2022-2023" }];
  constructor(private api: ApiService, private toastr: ToastrService, private router: Router) {
    this.getAllClass();
    this.getAllSection();
    this.addForm();
  }
  addForm() {
    this.reportForm = new FormGroup({
      studentClass: new FormControl(null, [Validators.required]),
      section: new FormControl(null, [Validators.required]),
      academicYear: new FormControl(null, [Validators.required])
    })
  }
  getAllSection() {
    this.api.getAllSection().subscribe(resp => {
      console.log(resp);
      this.sections = resp.sections
    });
  }

  getAllClass() {
    this.api.getAllClass().subscribe(resp => {
      console.log(resp);
      this.classes = resp.classes
    });

  }
  callReport(reportForm: any) {
    console.log(reportForm)
    const data = {
      academicYear: reportForm.value.academicYear,
      section: reportForm.value.section,
      studentClass: reportForm.value.studentClass,
    }
    this.api.allocationReportSearch(data).subscribe(data => {
      this.reportData = data.students;
    },
    (err) =>{
      this.reportData =[];
      this.toastr.error(err);
    })
  }
}
