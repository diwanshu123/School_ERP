import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-emp-desg',
  templateUrl: './emp-desg.component.html',
  styleUrls: ['./emp-desg.component.scss']
}) 
export class EmpDesgComponent {
  emplDesign:  FormGroup
  editEmplDesign:  FormGroup
  isLoading: boolean;

  constructor(private api: ApiService, private toastr: ToastrService)
  {
    this.emplDesign = new FormGroup({
      name: new FormControl(null, [Validators.required]),
    
    });

    this.editEmplDesign = new FormGroup({
      leavesCategoryId: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
     
    });
  }

  ngOnInit(): void {
 
  }

  
  

  getDesignations()
  {
    this.api.getEmpDesignation().subscribe(resp => {
      // this.designations = resp.designations;
   
    });
  }

  

  addEmployeDesign()
  {
    this.isLoading = true;
    this.api.addEmpDesign(this.emplDesign.value).subscribe(resp => {
      this.isLoading = false;
      this.toastr.success(resp.message, "Leave category add success");
      this.getDesignations();
    },
    (err) => {
      this.isLoading = false;
      this.toastr.error(err, "Leave category add failed");
    })
  }

  patchForm(leave: any)
  {
    // this.selectedLeave = leave;
    // this.editEmplDesign.patchValue({
    //   leavesCategoryId: leave._id,
    //   name: leave.name,
     
    // });
  }

  updatedesign()
  {
    this.isLoading = true;
    this.api.updateLeave(this.editEmplDesign.value).subscribe(resp => {
      this.isLoading = false;
      this.toastr.success(resp.message, "Employee Designation update success");
      document.getElementById('editModalDismissBtn')?.click();
      // this.getLeaveCategory();
    },
    (err) => {
      this.isLoading = false;
      this.toastr.error(err, " Update failed");
    })
  }

  deleteEmpDesignation()
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
