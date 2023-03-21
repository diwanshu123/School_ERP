import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-fee-type',
  templateUrl: './fee-type.component.html',
  styleUrls: ['./fee-type.component.scss']
})
export class FeeTypeComponent {
  feeTypeForm: FormGroup;
  feetype: any
 
  feeTypeLi: Array<Object> = [];
  isLoading: boolean;
  constructor(private api: ApiService,) { }

  // private toast: ToastrService 
  ngOnInit(): void {
  

    this.feeTypeForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
    });
this.feeTypeList();
  }


  addFeeType(){ 
    console.log("clicked,", this.feeTypeForm.value);
     this.isLoading = true
     this.feetype = ['feeTypes']
     this.api.addFeeType(this.feeTypeForm.value).subscribe((res)=>{
      console.log(res, "first res");
      
    },
    
    // (err) => {
    //   this.isLoading = false;
    //   this.toast.error(null, err.error.message);
    //   console.error(err);
    // }
    )
  }
 
  feeTypeList(){
    this.api.feeTypeList().subscribe((res: any)=> { 
      this.feeTypeLi = res
      console.log(this.feeTypeLi);
      
    })
  }

}
