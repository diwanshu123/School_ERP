import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-mark-entry',
  templateUrl: './mark-entry.component.html',
  styleUrls: ['./mark-entry.component.scss']
})
export class MarkEntryComponent {

  exams: any
  marksEntryForm: FormGroup;
  isLoading: boolean;
  classes:  any
  sections: any[] = [];
  subjects: any[] = [];

  constructor(private api: ApiService,private toastr: ToastrService  ) {

    this.marksEntryForm =  new FormGroup ({
      examId: new FormControl(null, [Validators.required]),
      subject: new FormControl(null, [Validators.required]),
      studentId: new FormControl(null, [Validators.required]),
      practical: new FormControl(null, [Validators.required]),
      written: new FormControl(null, [Validators.required]),


    })
  }


  ngOnInit(): void {
  this.getAllExam()
  this.getAllClass()
  this.getAllSection()
  this.getSubject()


}
getSubject(){

  this.api.getAllSubjects().subscribe(resp => {
    console.log(resp);
    
    this.subjects = resp.subjects
  });

}
getAllSection(){
   
  
  this.api.getAllSection().subscribe(resp => {
    console.log(resp);
    
    this.sections = resp.sections
  });

}


createMarks(){
  console.log(this.marksEntryForm.value);
    
  this.isLoading = true;
  this.api.createMarksEntry(this.marksEntryForm.value).subscribe(resp => {
    console.log(resp);
    
    this.isLoading = false;

    this.toastr.success(resp.message, "marksEntryForm  add success");
    this.getAllExam();
  ;
  },
  (err) => {
    this.isLoading = false;
    this.toastr.error(err, "marksEntryForm  add failed");
    console.error(err);
  })
}
  getAllExam(){
    console.log("this");
    
    this.api.getAllExam().subscribe((res)=>{
      this.exams = res.exams
      console.log(this.exams, "first res");
      
    })
  }
  getAllClass(){
   
  
    this.api.getAllClass().subscribe(resp => {
      console.log(resp);
      
      this.classes = resp.classes
    });

}
}
