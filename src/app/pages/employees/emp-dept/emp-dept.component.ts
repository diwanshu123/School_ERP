import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-emp-dept',
  templateUrl: './emp-dept.component.html',
  styleUrls: ['./emp-dept.component.scss']
})
export class EmpDeptComponent {

  departments: any[] = [];
  isLoading: boolean;
  deptForm: FormGroup;
  editDept: FormGroup;
  selectedDept: any;

  constructor(private api: ApiService, private toastr: ToastrService) {
    this.deptForm = new FormGroup({
      name: new FormControl(null, [Validators.required])
    });

    this.editDept = new FormGroup({
      name: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
    this.getDepartments();
  }

  getDepartments()
  {
    this.api.getDepartments().subscribe(resp => {
      this.departments = resp.departments
    });
  }

  addDepartment()
  {
    this.isLoading = true;
    this.api.addDepartment(this.deptForm.value).subscribe(resp => {
      console.log(resp);

      this.isLoading = false;

      this.toastr.success(resp.message, "Department add success");
      this.deptForm.reset();
      this.getDepartments();
    ;
    },
    (err) => {
      this.isLoading = false;
      this.toastr.error(err, "Department add failed");
      console.error(err);
    })
  }

  setDepartment(dept: any)
  {
    this.selectedDept = dept;
    this.editDept.patchValue({name: dept.name});
  }

  updateDepartment()
  {
    this.isLoading = true;
    this.api.updateDepartment(this.selectedDept._id, this.editDept.value).subscribe(resp => {
      console.log(resp);

      this.isLoading = false;

      document.getElementById('editModalDismissBtn')?.click();
      this.toastr.success(resp.message, "Department update success");
      this.getDepartments();
    ;
    },
    (err) => {
      this.isLoading = false;
      this.toastr.error(err, "Department update failed");
      console.error(err);
    })
  }

  deleteDepartment()
  {
    this.isLoading = true;
    this.api.deleteDepartment(this.selectedDept._id).subscribe(resp => {
      console.log(resp);
      this.isLoading = false;
      document.getElementById('modalDismissBtn')?.click();
      this.getDepartments();
    },
    (err) => {
      this.isLoading = false;
      console.error(err);
    })
  }


}
