import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxFileDropEntry,FileSystemFileEntry } from 'ngx-file-drop';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import * as moment from 'moment';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.scss']
})
export class EmpAddComponent {
  
  public files: NgxFileDropEntry[] = [];
  isLoading: boolean;
  fileData: any;
  startdateSelected: string;
  skipBankDetails: boolean =false;
  updateid: null;
  loginDeatils: boolean = false;

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);

          /**
          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file, relativePath)

          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          **/

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event: any){
    console.log(event);
  }

  public fileLeave(event: any){
    console.log(event);
  }



  employe_role = [
		{ id: '1 ', value: 'Admin' },
		{ id: '2', value: 'Teacher' },
		{ id: '3', value: 'Accountant' },
		{ id: '4', value: 'Librarian' },
		{ id: '5', value: 'Receptionist' },
	
	];

 
  addEmployee: FormGroup
  departments: any[] = [];
  designations: any[] = [];

  editEmploye: any;
  employeeId: string
abc: any

  constructor(private api: ApiService, private toastr: ToastrService, private route: ActivatedRoute,
    private router: Router)

    
  {

    route.params.subscribe(param => {
      if(router.getCurrentNavigation()?.extras.state) {
        this.editEmploye = router.getCurrentNavigation()?.extras.state?.['data'];
        this.employeeId = this.editEmploye.employeeId;


        // this._setValue();
      }
    });



   
  }
  AddEmployeF: any
  _action= 'Save'
  Cancel_update: String
  buttonSave:  boolean = false
  buttonUpdate:  boolean = false

  ngOnInit(): void {
    console.log("yes");
    this.getDepartments()
    this.getDesignations() 
    if(this.AddEmployeF || this.editEmploye == null){
      this.AddEmloyeForm()
      // this.getDepartments()
      // this.getDesignations() 
      this.buttonSave = true;
    }
    if(!this.AddEmployeF || this.editEmploye._id){
      console.log("not");
      
      this._setValue()
      this._action = 'Update'
      this.buttonUpdate = true
   
      this.Cancel_update = 'Cancel Update'
    }
  


 
  } 

AddEmloyeForm(){
  if(!this.AddEmployeF || this.editEmploye._id){
    this.addEmployee = new FormGroup({
    employeeId: new FormControl(null, [Validators.required]),
    joiningDate: new FormControl(null, [Validators.required]),
    designation: new FormControl('select', [Validators.required]),
    department: new FormControl('select', [Validators.required]),

    qualification: new FormControl(null, [Validators.required]),
    experienceDetails: new FormControl(null, [Validators.required]),
    totalExperience: new FormControl(null, [Validators.required]),
    name: new FormControl(null, [Validators.required]),
    gender: new FormControl(null, [Validators.required]),
    bloodGroup: new FormControl(null, [Validators.required]),
    religion: new FormControl(null, [Validators.required]),
    dob: new FormControl(null, [Validators.required]),
    number: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),

    presentAddress: new FormControl(null, [Validators.required]),
    permanentAddress: new FormControl(null, [Validators.required]),
    userName: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    facebook: new FormControl(null, [Validators.required]),
    twitter: new FormControl(null, [Validators.required]),
    linkedin: new FormControl(null, [Validators.required]),
    skipBankDetails: new FormControl(false, [Validators.required]),
    bankName: new FormControl(null, [Validators.required]),
    holderName: new FormControl(null, ),
    bankBranch: new FormControl(null, [Validators.required]),
    bankAddress: new FormControl(null, [Validators.required]),
    ifscCode: new FormControl(null, [Validators.required]),
    accountNumber: new FormControl(null, [Validators.required]),
    abc: new FormControl(null, [Validators.required]),
    image: new FormControl(null, [Validators.required]),

  });

  }
  this.addEmployee = new FormGroup({
 
    joiningDate: new FormControl(null, [Validators.required]),
    designation: new FormControl('select', [Validators.required]),
    department: new FormControl('select', [Validators.required]),

    qualification: new FormControl(null, [Validators.required]),
    experienceDetails: new FormControl(null, [Validators.required]),
    totalExperience: new FormControl(null, [Validators.required]),
    name: new FormControl(null, [Validators.required]),
    gender: new FormControl(null, [Validators.required]),
    bloodGroup: new FormControl(null, [Validators.required]),
    religion: new FormControl(null, [Validators.required]),
    dob: new FormControl(null, [Validators.required]),
    number: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    // city: new FormControl(null, [Validators.required]),
    // state: new FormControl(null, [Validators.required]),
    presentAddress: new FormControl(null, [Validators.required]),
    permanentAddress: new FormControl(null, [Validators.required]),
    userName: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    facebook: new FormControl(null, [Validators.required]),
    twitter: new FormControl(null, [Validators.required]),
    linkedin: new FormControl(null, [Validators.required]),
    skipBankDetails: new FormControl(false, [Validators.required]),
    bankName: new FormControl(null, [Validators.required]),
    holderName: new FormControl(null, ),
    bankBranch: new FormControl(null, [Validators.required]),
    bankAddress: new FormControl(null, [Validators.required]),
    ifscCode: new FormControl(null, [Validators.required]),
    accountNumber: new FormControl(null, [Validators.required]),
    abc: new FormControl(null, [Validators.required]),
    image: new FormControl(null, [Validators.required]),

    


  
  });
}

  getDesignations()
  {
    this.api.getDesignations().subscribe(resp => {
      this.designations = resp.designations
    });
  }
  getDepartments()
  {
    this.api.getDepartments().subscribe(resp => {
      this.departments = resp.departments
    });
  }

  skipDetail(event:any){
    // console.log(event.target.checked);
    // console.log(event.target.unchecked);

    // console.log(this.skipBankDetails);
    
if(!event.target.checked){
  console.log("inside if", event.target.checked);

  this.skipBankDetails=true
  console.log(this.skipBankDetails);

}else
{
  this.skipBankDetails=false

}



    
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
addEmployees()
{ 
  // this.isLoading = true;
  console.log(this.addEmployee.value);
 
 //  Create a new date object
let joiningDate: Date = new Date();
// Converting date to string
let result: string = joiningDate.toLocaleString();
console.log("The date string according to current locale is: " + result);
// Convert the date object to US specific date string
result = joiningDate.toLocaleString("en-US");
console.log("The date string according to US specific locale is: " + result);
  // this.addEmployee.controls.value/

 //  Create a new date object
 let dob: Date = new Date();
 // Converting date to string
 let result2: string = dob.toLocaleString();
 console.log("The date string according to current locale is: " + result2);
 // Convert the date object to US specific date string
 result2 = dob.toLocaleString("en-US");
 console.log("The date string according to US specific locale is: " + result2);
   // this.addEmployee.controls.value/
 
console.log("dob", dob

);
console.log(joiningDate);

 
  let postData = new FormData();
  postData.append("joiningDate", this.addEmployee.value.joiningDate);
  postData.append("dob", this.addEmployee.value.dob);
  postData.append("qualification", this.addEmployee.value.qualification);
  postData.append("experienceDetails", this.addEmployee.value.experienceDetails);
  postData.append("totalExperience", this.addEmployee.value.totalExperience);
  postData.append("name", this.addEmployee.value.name);
  postData.append("gender", this.addEmployee.value.gender);
  postData.append("bloodGroup", this.addEmployee.value.bloodGroup);
  postData.append("religion", this.addEmployee.value.religion);
  postData.append("number", this.addEmployee.value.number);
  postData.append("email", this.addEmployee.value.email);
  postData.append("presentAddress", this.addEmployee.value.presentAddress);
  postData.append("permanentAddress", this.addEmployee.value.permanentAddress);
  postData.append("userName", this.addEmployee.value.userName);
  postData.append("password", this.addEmployee.value.password);
  postData.append("facebook", this.addEmployee.value.facebook);
  postData.append("twitter", this.addEmployee.value.twitter);
  postData.append("linkedin", this.addEmployee.value.linkedin);
  postData.append("skipBankDetails", this.addEmployee.value.skipBankDetails);
  postData.append("bankName", this.addEmployee.value.bankName);
  postData.append("holderName", this.addEmployee.value.holderName);
  postData.append("bankBranch", this.addEmployee.value.bankBranch);
  postData.append("bankAddress", this.addEmployee.value.bankAddress);
  postData.append("ifscCode", this.addEmployee.value.ifscCode);
  postData.append("accountNumber", this.addEmployee.value.accountNumber);
  postData.append("designation", this.addEmployee.value.designation);
  postData.append("department", this.addEmployee.value.department);
  postData.append("employeeId", this.addEmployee.value.employeeId);
  postData.append("image", this.addEmployee.value.image);

  
  if(this.fileData) {
    postData.append("file", this.fileData);
  }
  this.startdateSelected = moment(this.addEmployee.value.start_date).format(
    'MM/DD/YYYY'
  );
 
  console.log(postData);
  this.api.addEmpployee(postData).subscribe(resp => {
  console.log(resp);

    this.isLoading = false;
    this.toastr.success(resp.message, "Add Employee  success");
    this.fileData = null;

   
  },
  (err) => {
    this.isLoading = false;
    this.toastr.error(err, " add failed");
  })
}
// name: new FormControl(, [Validators.required]),
update(){
console.log("clicked");

  this.isLoading = true;
  console.log(this
    .employeeId);
  
  this.api.updateEmpployee( this.addEmployee.value).subscribe(resp => {
    this.isLoading = false;
    this.toastr.success(resp.message, " update success");
    this.router.navigate(['/employee/list'])
  },
  (err) => {
    this.isLoading = false;
    this.toastr.error(err, " update failed");
  });


}

_setValue(){
  console.log(this.employeeId);
   this.employeeId;
	
   
   this.addEmployee = new FormGroup({
    
      employeeId: new FormControl(this.editEmploye._id, [Validators.required]),
    // role: new FormControl(this.editEmploye.role, [Validators.required]),
    joiningDate: new FormControl(this.editEmploye.joiningDate, [Validators.required]),
    designation: new FormControl(this.editEmploye.designation._id, [Validators.required]),
    department: new FormControl(this.editEmploye.department._id, [Validators.required]),

    qualification: new FormControl(this.editEmploye.qualification, [Validators.required]),
    experienceDetails: new FormControl(this.editEmploye.experienceDetails, [Validators.required]),
    totalExperience: new FormControl(this.editEmploye.totalExperience, [Validators.required]),
    name: new FormControl(this.editEmploye.name, [Validators.required]),
    gender: new FormControl(this.editEmploye.gender, [Validators.required]),
    bloodGroup: new FormControl(this.editEmploye.bloodGroup, [Validators.required]),
    religion: new FormControl(this.editEmploye.religion, [Validators.required]),
    dob: new FormControl(this.editEmploye.dob, [Validators.required]),
    number: new FormControl(this.editEmploye.number, [Validators.required]),
    email: new FormControl(this.editEmploye.email, [Validators.required]),
    presentAddress: new FormControl(this.editEmploye.presentAddress, [Validators.required]),
    permanentAddress: new FormControl(this.editEmploye.permanentAddress, [Validators.required]),
    userName: new FormControl(this.editEmploye.userName, [Validators.required]),
    password: new FormControl(this.editEmploye.password, [Validators.required]),
    facebook: new FormControl(this.editEmploye.facebook, [Validators.required]),
    twitter: new FormControl(this.editEmploye.twitter, [Validators.required]),
    linkedin: new FormControl(this.editEmploye.linkedin, [Validators.required]),
    skipBankDetails: new FormControl(this.editEmploye.skipBankDetails, [Validators.required]),
    bankName: new FormControl(this.editEmploye.bankName, [Validators.required]),
    holderName: new FormControl(this.editEmploye.holderName, ),
    bankBranch: new FormControl(this.editEmploye.bankBranch, [Validators.required]),
    bankAddress: new FormControl(this.editEmploye.bankAddress, [Validators.required]),
    ifscCode: new FormControl(this.editEmploye.ifscCode, [Validators.required]),
    accountNumber: new FormControl(this.editEmploye.accountNumber, [Validators.required]),
    
  });

}

DisableDetails(event: any){
  console.log(event);
  
  console.log(event);
  if(event.target.option ){
    console.log("inside if");
    
    this.loginDeatils =true
  }else{
    this.loginDeatils =false
  }
  
}

cancel(){
  this.router.navigate(['/employee/add'])
}

deleteEmploye()
{
//   this.isLoading = true;
//   this.api.deleteLeaveRequest(this.selectedLeave._id).subscribe(resp => {
//     console.log(resp);
//     this.isLoading = false;
//     document.getElementById('modalDismissBtn')?.click();
//     this.getLeaveApplication();
//   },
//   (err) => {
//     this.isLoading = false;
//     console.error(err);
//   })
}
}