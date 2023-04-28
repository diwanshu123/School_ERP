import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.scss']
})
export class AdmissionComponent {
  _form: FormGroup
  _form2: FormGroup
  myFiles:any

  classes: any[] = [];
  sections: any[] = [];
  categoryData :  any[] = []
  vehicles:  any[] = []
  
  doc1: any;
  doc2: any;
  doc3: any;
  doc4: any;
  doc5: any;
  doc6: any;
  profile: any
  aceYear = [{ _id: "2020-2021", name: "2020-2021" }, { _id: "2021-2022", name: "2021-2022" }, { _id: "2022-2023", name: "2022-2023" }];
  gender=[{
    _id: "1",
    name: "Male"
  },
{
  _id: '2',
  name: "Female"
}
]
  guardianFields: boolean = false;
 
  ProfileIMG: any;
  guardianPicture: any
  isLoading: boolean;
  image: any;
  idCardDocument: any;
  GuardianImage: any;
  guardianProf: any;
  routes: any[] = [];


constructor(private api: ApiService, private toastr: ToastrService, private router: Router){
  

  this._form = new FormGroup({
    academicYear: new FormControl(null, [Validators.required]),
    section: new FormControl("select", [Validators.required]),
    category: new FormControl("select", [Validators.required]),
    studentClass: new FormControl("select", [Validators.required]),
    registerNo: new FormControl(null, [Validators.required]),
    rollNo: new FormControl(null, [Validators.required]),
    admissionDate: new FormControl(null, [Validators.required]),
    firstName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    number: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    guardian: new FormControl(null, [Validators.required]),
    gender: new FormControl("select", [Validators.required]),
    type: new FormControl(null, [Validators.required]),
    bloodGroup: new FormControl(null, [Validators.required]),
    motherTongue: new FormControl(null, [Validators.required]),
    religion: new FormControl(null, [Validators.required]),
    caste: new FormControl(null, [Validators.required]),
    city: new FormControl(null, [Validators.required]),
    state: new FormControl(null, [Validators.required]),
    presentAddress: new FormControl(null, [Validators.required]),
    permanentAddress: new FormControl(null, [Validators.required]),
    dob: new FormControl(null, [Validators.required]),
    // type: new FormControl(null, [Validators.required]),

    password: new FormControl(null, [Validators.required]),
    // firstName: new FormControl(null, [Validators.required]),
    relation: new FormControl(null, [Validators.required]),
    fatherName: new FormControl(null, [Validators.required]),
    motherName: new FormControl(null, [Validators.required]),
    alreadyExists: new FormControl(false, [Validators.required]),
    occupation: new FormControl(null, [Validators.required]),
    // number: new FormControl(null, [Validators.required]),
    // email: new FormControl(null, [Validators.required]),
    // city: new FormControl(null, [Validators.required]),
    // state: new FormControl(null, [Validators.required]),
    // permanentAddress: new FormControl(null, [Validators.required]),
    previousSchoolName: new FormControl(null, [Validators.required]),
    previousQualification: new FormControl(null, [Validators.required]),
    userName: new FormControl(null, [Validators.required]),
  
   




})

this._form2 = new FormGroup({
  password: new FormControl(null, [Validators.required]),
  firstName: new FormControl(null, [Validators.required]),
  relation: new FormControl(null, [Validators.required]),
  fatherName: new FormControl(null, [Validators.required]),
  motherName: new FormControl(null, [Validators.required]),
  alreadyExists: new FormControl(false, [Validators.required]),
  occupation: new FormControl(null, [Validators.required]),
  number: new FormControl(null, [Validators.required]),
  email: new FormControl(null, [Validators.required]),
  city: new FormControl(null, [Validators.required]),
  state: new FormControl(null, [Validators.required]),
  permanentAddress: new FormControl(null, [Validators.required]),
  previousSchoolName: new FormControl(null, [Validators.required]),
  previousQualification: new FormControl(null, [Validators.required]),
  userName: new FormControl(null, [Validators.required]),





})

}

ngOnInit(): void {
  this.getAllClass()
  this.getAllCateogy()
  this.getAllRoutes()
  this.getAllVehicles()
}


getAllVehicles()
{
  this.api.getAllVehicles().subscribe(resp => {
    this.vehicles = resp.vehicles;
    
  console.log(this.vehicles);
  
  });
        

}

AddAdm(){

 
  console.log(this._form.value);
  
  let value = ""

  for(let key in this._form.value){
    value +=this._form.value[key]
  }
  console.log(value);

  let value2 = ""

  for(let key in this._form2.value){
    value2 +=this._form2.value[key]
  }
  console.log(value2);
  
  let addmissionData = value + value2 
  console.log(addmissionData);
  

  let postData = new FormData();

  postData.append("academicYear", this._form.value.academicYear);
  postData.append("section", this._form.value.section);
  postData.append("category", this._form.value.category);
  postData.append("studentClass", this._form.value.studentClass);
  postData.append("registerNo", this._form.value.registerNo);
  // postData.append("admissionDate", this._form.value.admissionDate);
  postData.append("admissionDate", moment(this._form.value.admissionDate).format("YYYY-MM-DD"));
  postData.append("firstName", this._form.value.firstName);
  postData.append("rollNo", this._form.value.rollNo);

  postData.append("type", this._form.value.type);
  // postData.append("dob", this._form.value.dob);
  postData.append("dob", moment(this._form.value.dob).format("YYYY-MM-DD"));

  postData.append("number", this._form.value.number);
  postData.append("email", this._form.value.email);
  postData.append("lastName", this._form.value.lastName);
  postData.append("gender", this._form.value.gender);
  postData.append("bloodGroup", this._form.value.bloodGroup);
  postData.append("motherTongue", this._form.value.motherTongue);
  postData.append("religion", this._form.value.religion);
  postData.append("caste", this._form.value.caste);
  postData.append("city", this._form.value.city);
  postData.append("state", this._form.value.state);
  postData.append("presentAddress", this._form.value.presentAddress);
  postData.append("permanentAddress", this._form.value.permanentAddress);
  
  postData.append("guardian[previousSchoolName]", this._form.value.previousSchoolName);
  postData.append("guardian[previousQualification]", this._form.value.previousQualification);
  postData.append("guardian[userName]", this._form.value.userName);
  postData.append("guardian[password]", this._form.value.password);
  postData.append("guardian[firstName]", this._form.value.firstName);
  postData.append("guardian[relation]", this._form.value.relation);
  postData.append("guardian[firstName]", this._form.value.firstName);
  postData.append("guardian[fatherName]", this._form.value.fatherName);
  postData.append("guardian[motherName]", this._form.value.motherName);
  postData.append("guardian[alreadyExists]", this._form.value.alreadyExists);
  postData.append("guardian[occupation]", this._form.value.occupation);
  postData.append("guardian[number]", this._form.value.number);
  postData.append("guardian[email]", this._form.value.email);
  postData.append("guardian[city]", this._form.value.city);
  postData.append("guardian[state]", this._form.value.state);
  postData.append("guardian[permanentAddress]", this._form.value.permanentAddress);

  if(this.image) {
    postData.append("image", this.image);
  }
  if(this.idCardDocument) {
    postData.append("idCardDocument", this.idCardDocument);
  }
  if(this.GuardianImage) {
    postData.append("guardian.image", this.GuardianImage);
  } 
  if(this.guardianProf) {
    postData.append("guardian.idProofDocument", this.guardianProf);
  } 

  console.log(this.image, this.idCardDocument, this.GuardianImage, this.guardianProf);
  
  let postData2 = new FormData();



console.log(postData);


    this.api.addAdmission(postData).subscribe(resp => {
      console.log(resp);

      this.isLoading = false;
      this._form.reset();
      // this.signImg = this.logoImg = this.backImg = null;
      this.toastr.success(resp.message, "Addmission add success");
      // this.getCertificates();
    },
    (err) => {
      this.isLoading = false;
      this.toastr.error(err, " add failed");
      console.error(err);
    })


}

 
onFilesDropped(files: NgxFileDropEntry[], imgType: string)
{


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
          if(imgType == 'image') {
            this.image = file;
          }
          else if(imgType == 'idCardDocument') {
            this.idCardDocument = file;
          }
          else if(imgType == 'GuardianImage') {
            this.GuardianImage = file;
          }
          else if(imgType == 'guardianProf') {
            this.guardianProf = file;
          }
         
        })
      }
    }
  }
}

getAllRoutes()
{


  this.api.getAllRoutes().subscribe(resp => {
    this.routes = resp.routes;
  });
}
getAllCateogy(){
  this.api.getCategory().subscribe(data =>{
    this.categoryData = data.categories;
    console.log(this.categoryData);
    
   });
}


getAllClass() {
  this.api.getAllClass().subscribe(resp => {
    console.log(resp);
    this.classes = resp.classes
  });
}

guardian(event: any){
  console.log(event.target.checked);
  if(event.target.checked){
    this.guardianFields = true
  }
  
  
}

onChangeClass(event){
  this.sections =[];
  this._form.patchValue({section: 'select'});
  const id = event.target.value;
  this.classes.forEach(element => {
      if(element._id === id) {
        this.sections = element.sections;
      }
  });
}


}
