import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private api: ApiService, private toastr: ToastrService, private route: ActivatedRoute){

    route.params.subscribe(param => {
      if(param['id']) {
        this.templateId = param['id'];
        this.getFineTemplateById();
      }
      this.fineSetupForm = new FormGroup({
        group_name: new FormControl(null, [Validators.required]),
        feeType: new FormControl(null, [Validators.required]),
        fineType: new FormControl(null, [Validators.required]),
        fineValue: new FormControl(null, [Validators.required]),
        lateFeeFrequency: new FormControl(null, [Validators.required]),
  
  
      });
    });
  }

  ngOnInit(): void {
    // this.patchFormData()
    // this.getFineTemplateById()
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
