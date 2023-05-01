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
  marksArr = [];
  exams: any
  marksEntryForm: FormGroup;
  isLoading: boolean;
  classes:  any
  sections: any[] = [];
  subjects: any[] = [];
  students:  any[] = []
  academics:  any[] = []
  constructor(private api: ApiService,private toastr: ToastrService  ) {

    this.marksEntryForm =  new FormGroup ({
      examId: new FormControl(null, [Validators.required]),
      academicYear: new FormControl(null, [Validators.required]),

      subject: new FormControl(null, [Validators.required]),
      studentId: new FormControl(null, [Validators.required]),
      practical: new FormControl(null, [Validators.required]),
      written: new FormControl(null, [Validators.required]),
      studentClass: new FormControl(null, [Validators.required]),
      section: new FormControl(null, [Validators.required]),



      


    })
  }


  ngOnInit(): void {
  this.getAllExam()
  this.getAllClass()
  this.getAllSection()
  this.getSubject()
  this.getAllStudent()
  this.getAllAcademics();


}
getAllAcademics(){
   
  
  this.api.getAllAcademic().subscribe(resp => {

    
    this.academics = resp.academics
    console.log(this.academics);
    
//  this.mapAcademicYear()

  });

}
getAllStudent(){
   
  
  this.api.getAllStudent().subscribe(resp => {
    console.log(resp);
    
    this.students = resp.students


  });

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


clickFilter(form:any){
  console.log(form.value);
  
  const s_year = form.value.academicYear;
  // const s_class = form.value.studentClass;
  // const s_section = form.value.section;
  // const s_exam = form.value.examId;
  // const s_subject = form.value.subject;
  const s_student= form.value.studentId;
  // const s_student= form.value.studentId;


  // this.getAllMarks(s_class,s_section, s_exam,s_subject );
  this.getAllMarks(s_year,s_student  );

}

// getAllMarks(s_class,s_section, s_exam,s_subject ){
getAllMarks(s_year,s_student  ){

  const payload ={
    academicYear:s_year,
    // studentClass:s_class, 
    // section:s_section,
    // examId: s_exam,
    // subject: s_subject,
    studentId: s_student
    

  }
  console.log(payload);
  
  this.api.getMarksAllById(payload).subscribe(resp => {
    console.log(resp);
    
    this.marksArr = resp.schedule;
    console.log(this.marksArr);
    
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

onChangeClass(event){
  this.sections =[];
  this.marksEntryForm.patchValue({section: 'select'});
  const id = event.target.value;
  this.classes.forEach(element => {
      if(element._id === id) {
        this.sections = element.sections;
      }
  });
}
}
