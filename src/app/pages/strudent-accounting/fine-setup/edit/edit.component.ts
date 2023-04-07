import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  
  isLoading: boolean;
  salaryForm: FormGroup;
  salary: any;
  templateId: string
  fineSetupForm: FormGroup;

  fineSetup: any
  fineSetupId: string
  editfine: any;

  constructor(private api: ApiService, private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router){
      route.params.subscribe(param => {
        if(router.getCurrentNavigation()?.extras.state) {
          this.editfine = router.getCurrentNavigation()?.extras.state?.['data'];
          this.fineSetupId = this.editfine._id;
         
          
          this.createForm();
        }
      });
  }
  ngOnInit(): void {
    // this.patchFormData()
    // this.getFineTemplateById()
  }
  createForm() { 

    this.fineSetupForm = new FormGroup({
      group_name: new FormControl(this.editfine.group_name, [Validators.required]),
      feeType: new FormControl(this.editfine.feeType.name, [Validators.required]),
      fineType: new FormControl(this.editfine.fineType, [Validators.required]),
      fineValue: new FormControl(this.editfine.fineValue, [Validators.required]),
      lateFeeFrequency: new FormControl(this.editfine.lateFeeFrequency, [Validators.required]),




    });

  }

  update(){

    this.isLoading = true;
    this.api.updateFine(this.fineSetupId, this.fineSetupForm.value).subscribe(resp => {
      this.isLoading = false;
      this.toastr.success(resp.message, "fineSetupForm update success");
    },
    (err) => {
      this.isLoading = false;
      this.toastr.error(err, "fineSetupForm update failed");
    });
  
  
  }
  

  getFineTemplateById()
  {
    console.log(this
      .templateId);
    
    this.api.fineSetupListById(this.templateId).subscribe(resp => {
      this.fineSetup = resp;
      console.log("this.finesetup", resp);
      
      this.patchFormData();
    })
  }
  resp:any
  patchFormData(){
    this.fineSetupForm.patchValue({
      // group_name: this.fines.group_name,
      feeType:  this.fineSetup.feeType,
      fineType:  this.fineSetup.fineType,
      fineValue: this.fineSetup.fineValue,
      lateFeeFrequency:  this.fineSetup.lateFeeFrequency
      
    })
   
    
  }

 


}
