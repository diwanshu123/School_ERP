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
  selectedfee: any;

  constructor(private api: ApiService, private toastr: ToastrService)
  {
    this.feeTypeForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      amount: new FormControl(null, [Validators.required]),
      dueDate: new FormControl(null, [Validators.required]),


    });
  }

  ngOnInit(): void {
    this.feeTypeList();
  }
  deleteFine()
  {
    this.isLoading = true;
    this.api.deleteFeeType(this.selectedfee._id).subscribe(resp => {
      console.log(resp);
      this.isLoading = false;
      document.getElementById('modalDismissBtn')?.click();
      this.feeTypeList();
    },
    (err) => {
      this.isLoading = false;
      console.error(err);
    })
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
