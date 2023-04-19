import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-expense-report',
  templateUrl: './expense-report.component.html',
  styleUrls: ['./expense-report.component.scss']
})
export class ExpenseReportComponent {

  employees: any[] = [];
  salaries: any[] = [];
  empSal: any[] = [];
  isLoading: boolean;

  constructor(private api: ApiService, private toastr: ToastrService)
  {}

  ngOnInit(): void {
    this.getAllVehicles()
  }

  getAllVehicles()
  {
    this.api.getAllEmployees().subscribe(resp => {
      console.log(this.employees);

      this.employees = resp.employees;
    });
  }
}
