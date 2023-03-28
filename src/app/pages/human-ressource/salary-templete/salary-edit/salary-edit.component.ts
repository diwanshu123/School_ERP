import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-salary-edit',
  templateUrl: './salary-edit.component.html',
  styleUrls: ['./salary-edit.component.scss'] 
})
export class SalaryEditComponent {

  isLoading: boolean;
  salaryForm: FormGroup;
  salary: any;
  templateId: string

  constructor(private api: ApiService, private toastr: ToastrService, private route: ActivatedRoute)
  {
    route.params.subscribe(param => {
      if(param['id']) {
        this.templateId = param['id'];
        this.getSalaryTemplateById();
      }
    });

    this.salaryForm = new FormGroup({
      salaryGrade: new FormControl(null, [Validators.required]),
      basicSalary: new FormControl(null, [Validators.required]),
      overTimeRatePerHr: new FormControl(0),
      allowances: new FormArray([]),
       deductions: new FormArray([]),
      basicSal: new FormControl({value: 0, disabled: true}),
      totalAllowance: new FormControl({value: 0, disabled: true}),
      totalDeduction: new FormControl({value: 0, disabled: true}),
      netSal: new FormControl({value: 0, disabled: true})
    })
  }

  ngOnInit(): void {}

  getSalaryTemplateById()
  {
    this.api.getSalaryTemplateById(this.templateId).subscribe(resp => {
      this.salary = resp.salary;
      this.patchFormData();
    })
  }

  get allowancesFields() {
    return this.salaryForm.get('allowances') as FormArray;
  }

  get deductionsFields() {
    return this.salaryForm.get('deductions') as FormArray;
  }

  addAllowancesField()
  {
    this.allowancesFields.push(
      new FormGroup({
        name:  new FormControl(null, [Validators.required]),
        amount: new FormControl(0, [Validators.required])
      })
    )
  }

  addDeductionsField()
  {
    this.deductionsFields.push(
      new FormGroup({
        name:  new FormControl(null, [Validators.required]),
        amount: new FormControl(0, [Validators.required])
      })
    )
  }

  patchFormData()
  {
    this.salaryForm.patchValue({
      salaryGrade: this.salary.salaryGrade,
      basicSalary: this.salary.basicSalary,
      overTimeRatePerHr: this.salary.overTimeRatePerHr,
      basicSal: this.salary.basicSalary,
      totalAllowance: this.salary.totalAllowance,
      totalDeduction: this.salary.totalDeductions,
      netSal: this.salary.netSalary
    });
    console.log(this
      .salaryForm.value
      );
    

    this.salary.allowances.forEach((allow: any, i: number) => {
      this.addAllowancesField();
      this.allowancesFields.at(i).patchValue({name: allow.name, amount: allow.amount});
    });

    this.salary.deductions.forEach((deduc: any, i: number) => {
      this.addDeductionsField();
      this.deductionsFields.at(i).patchValue({name: deduc.name, amount: deduc.amount});
    });
  }

  updateDetails()
  {
    let basicSal, totalAllowance = 0, totalDeduction = 0, netAmount = 0;

    basicSal = (this.salaryForm.get('basicSalary')?.value) ? this.salaryForm.get('basicSalary')?.value : 0;

    this.allowancesFields.controls.forEach(field => {
      totalAllowance += field.get('amount')?.value;
    });

    this.deductionsFields.controls.forEach(field => {
      totalDeduction += field.get('amount')?.value;
    });

    netAmount = basicSal + totalAllowance - totalDeduction;

    this.salaryForm.patchValue({
      basicSal: this.salaryForm.get('basicSalary')?.value,
      totalAllowance,
      totalDeduction,
      netSal: netAmount
    })
  }

  updateSalaryTemplate()
  {
    this.isLoading = true;
    let postData = this.salaryForm.value;
    postData["salaryId"] = this.templateId;
    this.api.updateSalary(postData).subscribe(resp => {
      this.isLoading = false;
      this.toastr.success(resp.message, "Salary template update success");
    },
    (err) => {
      this.isLoading = false;
      this.toastr.error(err, "Salary template update failed");
      console.error(err);
    })
  }
}
