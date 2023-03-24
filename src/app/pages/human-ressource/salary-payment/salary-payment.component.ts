import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-salary-payment',
  templateUrl: './salary-payment.component.html',
  styleUrls: ['./salary-payment.component.scss']
})
export class SalaryPaymentComponent {

  employees: any[] = [];
  salaries: any[] = [];
  empSal: any[] = [];

  constructor(private api: ApiService)
  {}

  ngOnInit(): void {
    this.getAllEmployees()
  }

  getAllEmployees()
  {
    this.api.getAllEmployees().subscribe(resp => {
      this.employees = resp.employees;
      this.getAllSalaries();
    });
  }

  getAllSalaries()
  {
    this.api.getSalaryTemplates().subscribe(resp => {
      this.salaries = resp.feeGroups;
      this.patchEmpSal();
    })
  }

  patchEmpSal()
  {
    this.employees.forEach(emp => {
      if(emp.salaryGrade) {
       emp.salaryDetails = this.salaries.find(sal => sal._id == emp.salaryGrade);
      }
    });
  }
}
