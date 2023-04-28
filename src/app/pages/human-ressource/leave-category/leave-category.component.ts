import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-leave-category',
  templateUrl: './leave-category.component.html',
  styleUrls: ['./leave-category.component.scss']
})
export class LeaveCategoryComponent implements OnInit {

  leaveCategories: any[] = [];
  designations: any[] = [];
  leaveForm: FormGroup;
  editLeaveForm: FormGroup;
  selectedLeave: any;
  isLoading: boolean;

  constructor(private api: ApiService, private toastr: ToastrService)
  {
    this.leaveForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      designation: new FormControl('select', [Validators.required]),
      days: new FormControl(null, [Validators.required])
    });

    this.editLeaveForm = new FormGroup({
      leavesCategoryId: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      designation: new FormControl('select', [Validators.required]),
      days: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
    this.getLeaveCategory();
  }

  getLeaveCategory()
  {
    this.api.getLeaveCategory().subscribe(resp => {
      this.leaveCategories = resp.leavesCategory;
      console.log(this.leaveCategories);
      
      this.getDesignaions();
    })
  }

  getDesignaions()
  {
    this.api.getDesignaions().subscribe(resp => {
      this.designations = resp.designations;
      console.log(this.designations);
      
      this.mapLeaveDesignation();
    });
  }  

  mapLeaveDesignation()
  {
    this.leaveCategories.forEach(leave => {
      console.log(leave);
      
      leave["designationDetail"] = this.designations.find(d => d._id == leave.designation);
      console.log(leave.d);
      
    });
  }

  addLeave()
  {
    this.isLoading = true;
    this.api.addLeave(this.leaveForm.value).subscribe(resp => {
      this.isLoading = false;
      this.toastr.success(resp.message, "Leave category add success");
      this.getLeaveCategory();
    },
    (err) => {
      this.isLoading = false;
      this.toastr.error(err, "Leave category add failed");
    })
  }

  patchLeaveForm(leave: any)
  {
    this.selectedLeave = leave;
    this.editLeaveForm.patchValue({
      leavesCategoryId: leave._id,
      name: leave.name,
      designation: leave.designation,
      days: leave.days
    });
  }

  updateLeave()
  {
    this.isLoading = true;
    this.api.updateLeave(this.editLeaveForm.value).subscribe(resp => {
      this.isLoading = false;
      this.toastr.success(resp.message, "Leave category update success");
      document.getElementById('editModalDismissBtn')?.click();
      this.getLeaveCategory();
    },
    (err) => {
      this.isLoading = false;
      this.toastr.error(err, "Leave category update failed");
    })
  }

  deleteLeave()
  {
    this.isLoading = true;
    this.api.deleteLeave(this.selectedLeave._id).subscribe(resp => {
      console.log(resp);
      this.isLoading = false;
      document.getElementById('modalDismissBtn')?.click();
      this.getLeaveCategory();
    },
    (err) => {
      this.isLoading = false;
      console.error(err);
    })
  }

}
