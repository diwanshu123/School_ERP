import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-class-assign',
  templateUrl: './class-assign.component.html',
  styleUrls: ['./class-assign.component.scss']
})
export class ClassAssignComponent {
classAssignForm: FormGroup
  isLoading: boolean;
  classes: any[] = [];
  sections: any[] = [];
  subjects: any[] = [];


  constructor(private api: ApiService, private toastr: ToastrService, private router: Router)
  {
   
    this.classAssignForm = new FormGroup({
      // vehicleId: new FormControl("select", [Validators.required]),
      expenseName: new FormControl(null, [Validators.required]),
      expenseValue: new FormControl(null, [Validators.required]),
      expenseTime: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),

    });
  }
  ngOnInit(): void {
  
    
    this.getAllSection();
    this.getAllClass();
    this.getSubject();

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
  getAllClass(){
   
  
    this.api.getAllClass().subscribe(resp => {
      console.log(resp);
      
      this.classes = resp.classes
    });

}
  AssignClassTeacher(){
    console.log(this.classAssignForm.value);
    
   
   
    // console.log(postData);
    this.api.addExpensReport(this.classAssignForm.value ).subscribe(resp => {
    console.log(resp);
  
      this.isLoading = false;
      this.toastr.success(resp.message, "Add Expense  success");
   
  
     
    },
    (err) => {
      this.isLoading = false;
      this.toastr.error(err, " add failed");
    })
  }
  

}
 