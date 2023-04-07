import { Component, ViewChild,  } from '@angular/core';

import { ApiService } from 'src/app/services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-fine-setup',
  templateUrl: './fine-setup.component.html',
  styleUrls: ['./fine-setup.component.scss']
})
export class FineSetupComponent {
  selectedTabIndex: number = 0;
  fineSetupForm: FormGroup;
  fines: any[] = [];
  feeType: any[] = [];
  isLoading: boolean;
  selectedfine: any;
  selectedFine: any;


  constructor(private api: ApiService,
    private toastr: ToastrService,
    private router: Router,

    )
  {
    this.fineSetupForm = new FormGroup({
      feeType: new FormControl('select', [Validators.required]),
      fineType: new FormControl('select', [Validators.required]),
      fineValue: new FormControl(null, [Validators.required]),
      lateFeeFrequency: new FormControl('select', [Validators.required]),


    });
  }

  ngOnInit(): void {
    this.fineSetupList()
    this.getFeeTypes();

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
      this.fineSetupList();
    },
    (err) => {
      this.isLoading = false;
      this.toastr.error(err, "Fee add failed");
      console.error(err);
    }
    )
  }

// moveToSelectedTab(tabName: string) {
//   console.log(tabName);


//   for (let i =0; i< document.querySelectorAll('.mat-tab-label-content').length; i++) {
//       if ((<HTMLElement>document.querySelectorAll('.mat-tab-label-content')[i]).innerText == tabName) {
//         (<HTMLElement>document.querySelectorAll('.mat-tab-label')[i]).click();
//       }
//     }
// }
edit(fine : Object) :void{
  console.log("fine",  fine);
}

changeTab(event: any){
  console.log(event);

  console.log(event.tab.label);


}
  fineSetupList()
  {
    this.api.fineSetupList().subscribe((res: any)=> {
      this.fines = res.fines;

      console.log(res, "fineSetup");
    })
    // this.feeTypeFineSetup();
  }

  getFeeTypes()
  {
    this.api.feeTypeList().subscribe(resp => {
      this.feeType = resp.feeTypes;
    })
  }

  deleteFine()
  {
    this.isLoading = true;
    this.api.deleteFineSetup(this.selectedfine._id).subscribe(resp => {
      console.log(resp);
      this.isLoading = false;
      document.getElementById('modalDismissBtn')?.click();
      this.fineSetupList();
    },
    (err) => {
      this.isLoading = false;
      console.error(err);
    })
  }

  editFine(route: any)
  {
    this.selectedFine = route;
    const navExtras: NavigationExtras = {
      state: {
        data: this.selectedFine
      }
    };

    this.router.navigate(["/student-acconting/fine-setup/", this.selectedFine._id], navExtras);
  }


}
