import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-grade-range',
  templateUrl: './grade-range.component.html',
  styleUrls: ['./grade-range.component.scss']
})
export class GradeRangeComponent {
  isLoading: boolean;
  gradeForm : FormGroup
  grade: any;
  selectedGrade: any;
  grades:any ;


  

  constructor(private api: ApiService,private toastr: ToastrService  ) {
    this.gradeForm =  new FormGroup ({
      name: new FormControl(null, [Validators.required]),
      gradePoint: new FormControl(null, [Validators.required]),
      minPercentage: new FormControl(null, [Validators.required]),
      maxPercentage: new FormControl(null, [Validators.required]),
      remarks: new FormControl(null, [Validators.required]),


    })
  }


  ngOnInit(): void {
    this.getAllGrade()
 
}

addGrade() { 
 
  this.isLoading = true;
  console.log(this.gradeForm.value);
  
  this.api.createGrades(this.gradeForm.value).subscribe(resp => {
    console.log(resp);
    
    this.isLoading = false;

    this.toastr.success(resp.message, "exams  add success");
  
  ;
  },
  (err) => {
    this.isLoading = false;
    this.toastr.error(err, "exams  add failed");
    console.error(err);
  })
}

getAllGrade(){
  this.api.getAllGrades().subscribe((res)=>{
    this.grades = res.grades
    console.log(this.grades, "grade res");
    
  })
}

deleteGrade(){
  this.api.deleteGrade(this.selectedGrade._id).subscribe((res)=>{
    console.log(res);
    this.isLoading = false;
    document.getElementById('modalDismissBtn')?.click();
 

  },
  (err) => {
    this.isLoading = false;
    console.error(err);
  })
}
}
