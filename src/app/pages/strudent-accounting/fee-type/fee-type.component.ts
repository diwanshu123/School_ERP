import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-fee-type',
  templateUrl: './fee-type.component.html',
  styleUrls: ['./fee-type.component.scss']
})
export class FeeTypeComponent {
  feeTypeForm: FormGroup;
  feeTypes: any[] = [];
  isLoading: boolean;

  constructor(private api: ApiService, private toastr: ToastrService)
  {
    this.feeTypeForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.feeTypeList();
  }

  addFeeType()
  {
    console.log("clicked,", this.feeTypeForm.value);
    this.isLoading = true;
    let postData = this.feeTypeForm.value;
    postData['code'] = postData.name;
    this.api.addFeeType(postData).subscribe((res)=>{
      this.isLoading = false;
      console.log(res, "first res");
      this.toastr.success(res.message, "Fee add success");
    },
    (err) => {
      this.isLoading = false;
      this.toastr.error(err, "Fee add failed");
      console.error(err);
    }
    )
  }

  feeTypeList()
  {
    this.api.feeTypeList().subscribe((res: any)=> {
      this.feeTypes = res.feeTypes;
      console.log(res);
    })
  }

}
