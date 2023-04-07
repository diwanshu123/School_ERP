import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent {

  employees: any[] = [];
  filteredEmp: any[] = []

  constructor(private api: ApiService, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees()
  {
    this.api.getAllEmployees().subscribe(resp => {
      this.employees = resp.employees;
      this.filteredEmp = this.employees.filter(emp => emp.designation?.name == 'Admin');
    });
  }

  filterEmployee(event: any)
  {
    const tabIndex = event.index;
    if(tabIndex == 0) {
      this.filteredEmp = this.employees.filter(emp => emp.designation?.name == 'Admin')
    }
    else if(tabIndex == 1) {
      this.filteredEmp = this.employees.filter(emp => emp.designation?.name == 'Teacher')
    }
    else if(tabIndex == 2) {
      this.filteredEmp = this.employees.filter(emp => emp.designation?.name == 'Accountant')
    }
    else if(tabIndex == 3) {
      this.filteredEmp = this.employees.filter(emp => emp.designation?.name == 'Librarian')
    }
    else if(tabIndex == 4) {
      this.filteredEmp = this.employees.filter(emp => emp.designation?.name == 'Receptionist')
    }
  }

}
