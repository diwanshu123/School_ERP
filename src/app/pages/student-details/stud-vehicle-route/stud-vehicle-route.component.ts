import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-stud-vehicle-route',
  templateUrl: './stud-vehicle-route.component.html',
  styleUrls: ['./stud-vehicle-route.component.scss']
})
export class StudVehicleRouteComponent {
  @Input() studentData: any ;
  studentVehicle:any;
  vehicleRouteList:any[] = [];
  vehicleForm:FormGroup;
  isFormLoaded = false;
  constructor(private api: ApiService, private toastr: ToastrService, private router: Router,public fb: FormBuilder) { 
  }
 ngOnInit() {
  this.studentVehicle = this.studentData;
  this.getVehicleInfo();
 }
 getVehicleInfo(){
  this.api.getAllVehicleAssigns().subscribe(resp => {
    this.vehicleRouteList = resp.vehicleRoutes;
    this.createForm();
  });
 }
 createForm(){
  this.isFormLoaded = true;
  this.vehicleForm = this.fb.group({ 
      studentId:[this.studentData?._id],
      vehicleRouteId:[''],
      routeId:[this.studentVehicle?.vehicleRoute?._id,Validators.required],
      vehicleNo:[this.studentVehicle?.vehicleRoute?.vehicle?._id, Validators.required],
      stoppageId:[this.studentVehicle?.vehicleRoute?.stoppage, Validators.required]
    });
  }
  updateInfo(formData){
    const payload ={
      studentId : formData.value.studentId,    
      vehicleRouteId: formData.value.routeId, 
      route:formData.value.routeId,
      vehicle:formData.value.vehicleNo,
      stoppage:formData.value.stoppageId,
    }
    this.api.updateStudentRoute(payload).subscribe(resp => {
      this.toastr.success("Transport Data Updated Successfully", "Updated Successfully");
     
    },
    (err) => {
      this.toastr.error(err, " Update Failed");
      console.error(err);
    })
  }
}