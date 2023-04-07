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
  emplDepForm:  FormGroup
  editEmpDep:  FormGroup
  isLoading: boolean;

  constructor(private api: ApiService, private toastr: ToastrService)
  {
    this.emplDepForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
    
    });

    this.editEmpDep = new FormGroup({
      // leavesCategoryId: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
     
    });
  }

  ngOnInit(): void {
 
  }

  // getLeaveCategory()
  // {
  //   this.api.getEmpDesignation().subscribe(resp => {
  //     // this.leaveCategories = resp.leavesCategory;
  //     this.getDesignaions();
  //   })
  

  getDesignations()
  {
    this.api.getEmpDesignation().subscribe(resp => {
      // this.designations = resp.designations;
   
    });
  }

  

  addEmployeDep()
  {
    this.isLoading = true;
    this.api.addEmpDepratment(this.emplDepForm.value).subscribe(resp => {
      this.isLoading = false;
      this.toastr.success(resp.message, "add success");
   
    },
    (err) => {
      this.isLoading = false;
      this.toastr.error(err, " add failed");
    })
  }

  patchForm(leave: any)
  {
    // this.selectedLeave = leave;
    // this.editLeaveForm.patchValue({
    //   leavesCategoryId: leave._id,
    //   name: leave.name,
    // 
    // });
  }

  updateDepartMent()
  {
    this.isLoading = true;
    this.api.updateLeave(this.editEmpDep.value).subscribe(resp => {
      this.isLoading = false;
      this.toastr.success(resp.message, "Leave category update success");
      document.getElementById('editModalDismissBtn')?.click();
      // this.getLeaveCategory();
    },
    (err) => {
      this.isLoading = false;
      this.toastr.error(err, "Leave category update failed");
    })
  }

deleteEmpDep()
  {
  //   this.isLoading = true;
  //   this.api.deleteLeave(this.selectedLeave._id).subscribe(resp => {
  //     console.log(resp);
  //     this.isLoading = false;
  //     document.getElementById('modalDismissBtn')?.click();
  //     // this.getLeaveCategory();
  //   },
  //   (err) => {
  //     this.isLoading = false;
  //     console.error(err);
  //   })
  }

}
