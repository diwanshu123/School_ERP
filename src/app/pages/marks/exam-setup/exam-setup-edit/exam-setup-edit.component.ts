import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { EmpAddComponent } from 'src/app/pages/employees/emp-add/emp-add.component';
import { ApiService } from 'src/app/services/api.service';

import { map , tap} from "rxjs/operators";

@Component({
  selector: 'app-exam-setup-edit',
  templateUrl: './exam-setup-edit.component.html',
  styleUrls: ['./exam-setup-edit.component.scss']
})
export class ExamSetupEditComponent {
  exams: any
  examForm:  FormGroup
  isLoading: boolean;
  examTerms: any;
  marksDistributions: any;
  selectedLeave: any;
  examId:  string

  naviData: string ;

  constructor(private api: ApiService,private toastr: ToastrService ,private route: ActivatedRoute)  {
    
    route.params.subscribe(param => {
      if(param['id']) {
        this.examId = param['id'];
       
      }
    });
    this.examForm =  new FormGroup ({
      name: new FormControl(null, [Validators.required]),
      term: new FormControl(null, [Validators.required]),
      examtype: new FormControl(null, [Validators.required]),
      marksDistribution: new FormControl(null, [Validators.required]),
      remarks: new FormControl(null, [Validators.required]),
  })
  }
exam:any
  ngOnInit(): void {
    this.patchLeaveForm(this.exam)

    this.route.queryParams
    .pipe(
      map(para => para['data'] || 'None')
      )
    .subscribe(v => {
      this.naviData = v;
    });

  }



  patchLeaveForm(exam: any)
  {
    console.log(exam);
    

    this.selectedLeave = exam;
    // this.examForm.patchValue({
    //   leavesCategoryId: leave._id,
    //   name: leave.name,
    //   term: leave.term,
    //   examtype: leave.examtype,
    //   marksDistribution: leave.marksDistribution,
    //   remarks: leave.days

  //   });
  }
}
