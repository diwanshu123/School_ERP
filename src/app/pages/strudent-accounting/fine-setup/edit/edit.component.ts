import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  fineSetupId: string
  editfine: any;
  feeType: any[] = [];

  constructor(private api: ApiService, private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router){
      route.params.subscribe(param => {
        if(router.getCurrentNavigation()?.extras.state) {
          this.editfine = router.getCurrentNavigation()?.extras.state?.['data'];
          this.fineSetupId = this.editfine._id;
          this.createForm();
          this.getFeeTypes();
        }
      });
  }
  ngOnInit(): void {
    // this.patchFormData()
    // this.getFineTemplateById()
  }

  getFeeTypes()
  {
    this.api.feeTypeList().subscribe(resp => {
      this.feeType = resp.feeTypes;
      this.patchForm();
    })
  }

  createForm() {

    this.fineSetupForm = new FormGroup({
      feeType: new FormControl('select', [Validators.required]),
      fineType: new FormControl('select', [Validators.required]),
      fineValue: new FormControl(0, [Validators.required]),
      lateFeeFrequency: new FormControl('select', [Validators.required]),
    });

  }

  patchForm() {
    this.fineSetupForm .patchValue({
      feeType: this.editfine.feeType._id,
      fineType: this.editfine.fineType,
      fineValue: this.editfine.fineValue,
      lateFeeFrequency: this.editfine.lateFeeFrequency,
    });
  }

  update(){

    this.isLoading = true;
    this.api.updateFine(this.fineSetupId, this.fineSetupForm.value).subscribe(resp => {
      this.isLoading = false;
      this.toastr.success(resp.message, "fineSetupForm update success");
    },
    (err) => {
      this.isLoading = false;
      this.toastr.error(err, "fineSetupForm update failed");
    });
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
