import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-fee-type-edit',
  templateUrl: './fee-type-edit.component.html',
  styleUrls: ['./fee-type-edit.component.scss']
})
export class FeeTypeEditComponent {
  feeTypeForm: FormGroup;

  isLoading: boolean;
  templateId: string
  feeType:  any

  constructor(private api: ApiService, private toastr: ToastrService, private route: ActivatedRoute)
  {
    route.params.subscribe(param => {
      if(param['id']) {
        this.templateId = param['id'];
        this.getFeeTemplateById();
      }
    this.feeTypeForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      amount: new FormControl(null, [Validators.required]),
      dueDate: new FormControl(null, [Validators.required]),


    });
  });
}

  getFeeTemplateById()
  {
    console.log(this.templateId);
    
    this.api.feeTypeListByid(this.templateId).subscribe(resp => {
      this.feeType = resp;
      console.log("this.finesetup", resp);
      
      this.patchFormData();
    })
  }

  patchFormData(){
    this.feeTypeForm.patchValue({
      feeType:  this.feeType.feeType,
      fineType:  this.feeType.fineType,
      fineValue: this.feeType.fineValue,
      lateFeeFrequency:  this.feeType.lateFeeFrequency
      
    })
   
    
  }

}
