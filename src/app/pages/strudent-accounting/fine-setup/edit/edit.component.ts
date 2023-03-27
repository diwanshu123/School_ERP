import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  fine: any
  constructor(private api: ApiService, private toastr: ToastrService, private route: ActivatedRoute){

    route.params.subscribe(param => {
      if(param['id']) {
        this.templateId = param['id'];
        this.getFineTemplateById();
      }
      this.fineSetupForm = new FormGroup({
        group_name: new FormControl(null, [Validators.required]),
        feeType: new FormControl(null, [Validators.required]),
        fineType: new FormControl(null, [Validators.required]),
        fineValue: new FormControl(null, [Validators.required]),
        lateFeeFrequency: new FormControl(null, [Validators.required]),
  
  
      });
    });
  }

  ngOnInit(): void {
    this.patchFormData()
    this.getFineTemplateById()
  }
  // fines:any
  fines: any[] = [];
  getFineTemplateById()
  {
    console.log(this
      .templateId);
    
    this.api.fineSetupListById(this.templateId).subscribe(resp => {
      // this.fine = resp.fines;
      this.patchFormData();
    })
  }


  patchFormData(){
    this.fineSetupForm.patchValue({
      // group_name: this.fines.group_name,
      feeType:  this.fine.feeType,
      fineType:  this.fine.fineType,
      fineValue: this.fine.fineValue,
      lateFeeFrequency:  this.fine.lateFeeFrequency
    })
  }

}
