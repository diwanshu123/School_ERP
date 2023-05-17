import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from 'src/app/pages/student-details/student.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-fee-type-edit',
  templateUrl: './fee-type-edit.component.html',
  styleUrls: ['./fee-type-edit.component.scss']
})
export class FeeTypeEditComponent implements OnInit {
  feeTypeForm: FormGroup;
  fineSetupId: string
  isLoading: boolean;
  templateId: string
  feeType:  any
  editfee: any;
  getTypes: any = []
  AcedmicYearList : any[] = [
    {year: "2023-2024"},
    {year: "2024-2025"},
    {year: "2025-2026"},
    {year: "2026-2027"},
    
  ];
  constructor(private api: ApiService, private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router, private studentService: StudentService)
  {

    route.params.subscribe(param => {
      if(router.getCurrentNavigation()?.extras.state) {
        this.editfee = router.getCurrentNavigation()?.extras.state?.['data'];
        this.fineSetupId = this.editfee._id;


        this.craeteForm();
      }
    });
}

ngOnInit(): void {
 console.log("get", this.feeTypeForm);
  this.studentService.data$.subscribe((res) => {
    
    if(res != undefined) {
      this.getTypes = res;
      console.log("sdsdsddsdsdsdsd", this.getTypes);
   
    //  this.feeTypeForm.setValue({
    //   name: res.
    //  })
    }
  })
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
  console.log("value", this.feeTypeForm.value);
  
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
