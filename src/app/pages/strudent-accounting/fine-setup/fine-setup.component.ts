import { Component, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fine-setup',
  templateUrl: './fine-setup.component.html',
  styleUrls: ['./fine-setup.component.scss']
})
export class FineSetupComponent {
  fineSetupForm: FormGroup;
  fines: any[] = [];
  feeType: any[] = [];
  isLoading: boolean;

  constructor(private api: ApiService, 
    private toastr: ToastrService,
    private router: Router,
    
    )
  {
    this.fineSetupForm = new FormGroup({
      // group_name: new FormControl(null, [Validators.required]),
      feeType: new FormControl(null, [Validators.required]),
      fineType: new FormControl(null, [Validators.required]),
      fineValue: new FormControl(null, [Validators.required]),
      lateFeeFrequency: new FormControl(null, [Validators.required]),


    });
  }

  ngOnInit(): void {
    this.fineSetupList()
   
  }

  addFineSetup()
  {
    console.log("clicked,", this.fineSetupForm.value);
    this.isLoading = true;
    let postData = this.fineSetupForm.value;
    postData['code'] = postData.name;
    this.api.addFineSetup(postData).subscribe((res)=>{
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
    if(this.isLoading=true){
      this.router.navigate(['student-acconting/fine-setup']);
    }
  }

  fineSetupList()
  {
    this.api.fineSetupList().subscribe((res: any)=> {
      this.fines = res.fines;
    
      console.log(res, "fineSetup");
    })
    // this.feeTypeFineSetup();
  }
  // feeTypeFineSetup()
  // {
  //   this.api.fineSetupList().subscribe((res: any)=> {
  //     this.feeType= res.feeType
      
  //     console.log(res, "feeTypesGroup");
  //   })

    
  // }

}
