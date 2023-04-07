import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-fee-type-edit',
  templateUrl: './fee-type-edit.component.html',
  styleUrls: ['./fee-type-edit.component.scss']
})
export class FeeTypeEditComponent {
  feeTypeForm: FormGroup;
  fineSetupId: string
  isLoading: boolean;
  templateId: string
  feeType:  any
  editfee: any;

  constructor(private api: ApiService, private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router)
  {

    route.params.subscribe(param => {
      if(router.getCurrentNavigation()?.extras.state) {
        this.editfee = router.getCurrentNavigation()?.extras.state?.['data'];
        this.fineSetupId = this.editfee._id;


        this.craeteForm();
      }
    });
}


craeteForm(){
  this.feeTypeForm = new FormGroup({
    name: new FormControl(this.editfee.name, [Validators.required]),
    description: new FormControl(this.editfee.description, [Validators.required]),
    amount: new FormControl(this.editfee.amount, [Validators.required]),
    dueDate: new FormControl(this.editfee.dueDate, [Validators.required]),




  });
}
update(){

  this.isLoading = true;
  this.api.updateFeeType(this.fineSetupId, this.feeTypeForm.value).subscribe(resp => {
    this.isLoading = false;
    this.toastr.success(resp.message, "Fine type update success");
  },
  (err) => {
    this.isLoading = false;
    this.toastr.error(err, "Fee type update failed");
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
