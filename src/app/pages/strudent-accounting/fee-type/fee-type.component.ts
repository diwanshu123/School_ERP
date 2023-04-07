import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';



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
  selectedFee: any;

  constructor(private api: ApiService, private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router)
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

  editFeeType(route: any)
  {
    console.log(route);
    
    this.selectedFee = route;
    const navExtras: NavigationExtras = {
      state: {
        data: this.selectedFee
      }
    };

    this.router.navigate(["/student-acconting/fees-type/", this.selectedFee._id], navExtras);
  }

}
