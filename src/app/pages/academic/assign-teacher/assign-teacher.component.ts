import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { elementAt } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-assign-teacher',
  templateUrl: './assign-teacher.component.html',
  styleUrls: ['./assign-teacher.component.scss']
})
export class AssignTeacherComponent {     
  isLoading: boolean;

  TeacherForm: FormGroup
  sections: any[] = [];
  classes: any[] = [];
  designations: any[] = [];
  employees: any[] = [];
  filteredEmp: any[] = []
  academics:  any=[]
  selectedAcdemic: any

  abc: any;
  academicsId: String
  beeni: any;
  letter: any;
  value: any;
  selectedItem

  stud: any
  constructor(private api: ApiService, private toastr: ToastrService) {
    this.TeacherForm = new FormGroup({
      academicYear: new FormControl(null, [Validators.required]),
      studentClass: new FormControl(null, [Validators.required]),
      section: new FormControl(null, [Validators.required]),
      teacher: new FormControl(null, [Validators.required])
  

    });

 
  }

  ngOnInit(): void {
    
    this.getAllAcademics();
    this.getAllSection();
    this.getAllClass();
    this.getDesignations();
    this.getEmployees();
    console.log(this.selectedAcdemic);
    
this.getAcdemicsDeatails()

  }

abaac(selectedAcdemic, event){
  console.log(selectedAcdemic._id);
  

}
  getEmployees()
  {
    this.api.getAllEmployees().subscribe(resp => {
      this.employees = resp.employees;
      // console.log(this.employees);
      
      this.filteredEmp = this.employees.filter(emp => emp.designation?.name == 'Teacher');
      // console.log(this.filteredEmp);
      
    });
  }

  filterEmployee(event: any)
  {
    const tabIndex = event.index;
    if(tabIndex == 0) {
      this.filteredEmp = this.employees.filter(emp => emp.designation?.name == 'Admin')
    }
    else if(tabIndex == 1) {
      this.filteredEmp = this.employees.filter(emp => emp.designation?.name == 'Teacher')
    }
    else if(tabIndex == 2) {
      this.filteredEmp = this.employees.filter(emp => emp.designation?.name == 'Accountant')
    }
    else if(tabIndex == 3) {
      this.filteredEmp = this.employees.filter(emp => emp.designation?.name == 'Librarian')
    }
    else if(tabIndex == 4) {
      this.filteredEmp = this.employees.filter(emp => emp.designation?.name == 'Receptionist')
    }
  }
  getAllSection(){
   
  
    this.api.getAllSection().subscribe(resp => {
      // console.log(resp);
      
      this.sections = resp.sections
    });

}
x
getDesignations()
{
  this.api.getDesignations().subscribe(resp => {
    // console.log(resp);
    this.designations = resp.designations
  });
}


  getAllClass(){
  
  
    this.api.getAllClass().subscribe(resp => {
      // console.log(resp);
      
      this.classes = resp.classes
    });

}
 arrayA: any[] = []
  commentArray = [];
getAcdemicsDeatails(){
 console.log(this.selectedAcdemic._id);


  this.api.getAcademics(this.selectedAcdemic._id).subscribe(resp => {
    console.log("=======",resp);
    
    this.academics = resp.academics
    console.log(this.academics);
    
  });

}
emptyArr = []
getAllAcademics(){
   
  
  this.api.getAllAcademic().subscribe(resp => {

  console.log(resp);
  // this.getAcdemicsDeatails(resp.academics) 
  
    
    this.academics = resp.academics
  
console.log(this.academics);

  });


}



clickFilter(){

  
  this.selectedAcdemic
  console.log(this.selectedItem);
  
}

  addTeachernew()
  {
    this.isLoading = true;
    // console.log(this.TeacherForm.value);
    
    this.api.addTeacher(this.TeacherForm.value).subscribe(resp => {
      // console.log(resp);

      this.isLoading = false;

      this.toastr.success(resp.message, " add success");
      this.TeacherForm.reset();

    ;
    },
    (err) => {
      this.isLoading = false;
      this.toastr.error(err, "Assign Teacher  failed");
      // console.error(err);
    })
  }


}
