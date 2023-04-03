import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-disturbution',
  templateUrl: './disturbution.component.html',
  styleUrls: ['./disturbution.component.scss']
})
export class DisturbutionComponent {
  disturbutionForm:  FormGroup
  editDistForm: FormGroup
  isLoading: boolean;
  marksDistributions: any;
  selectedDist: any;


  constructor(private api: ApiService,private toastr: ToastrService  ) {
    this.disturbutionForm =  new FormGroup ({
      name: new FormControl(null, [Validators.required]),
    
    });
    this.editDistForm =  new FormGroup ({
     
      marksDistributionId: new FormControl(null, [Validators.required]),

      name: new FormControl(null, [Validators.required]),
    
    });


 

  }
  exam:any
  ngOnInit(): void {this.getMarksDiturbution() }


  addDist()
  {
    console.log(this.disturbutionForm.value);
    
    this.isLoading = true;
    this.api.marksDistribution(this.disturbutionForm.value).subscribe(resp => {
      console.log(resp);
      
      this.isLoading = false;

      this.toastr.success(resp.message, "exams Disturbution  add success");
     
  this.getMarksDiturbution();
    },
    (err) => {
      this.isLoading = false;
      this.toastr.error(err, "exams  Disturbution add failed");
      console.error(err);
    })
  }

  getMarksDiturbution(){
    console.log("this");
    
    this.api.getAllMarksDistubutions().subscribe((res)=>{
      this.marksDistributions = res.marksDistributions
      console.log(this.marksDistributions, "first res");
      
    })
  }
  patchDistForm(dist:  any){
   this.selectedDist=dist
    this.editDistForm.patchValue({
      marksDistributionId: dist._id,
      name: dist.name,
 
    });
    
  }
  updateDist(){
    this.isLoading = true;
    console.log(":this.editDistForm.value", this.editDistForm.value);
    
    this.api.updateMarksDistribution(this.editDistForm.value).subscribe(resp => {
      console.log(resp);
      
      this.isLoading = false;
      this.toastr.success(resp.message, "Exam  Disturbution  update success");
      document.getElementById('editModalDismissBtn')?.click();
      this.getMarksDiturbution();
    },
    (err) => {
      this.isLoading = false;
      this.toastr.error(err, "Exam  Disturbution update failed");
    })

  }
  deleteDist(){

    this.isLoading = true;
    this.api.deleteMarksDistribution(this.selectedDist._id).subscribe(resp => {
      console.log(resp);
      this.isLoading = false;
      document.getElementById('modalDismissBtn')?.click();
      this.getMarksDiturbution()
    },
    (err) => {
      this.isLoading = false;
      console.error(err);
    })
  }

  }

