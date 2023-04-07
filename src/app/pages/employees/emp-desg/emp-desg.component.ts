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

  designations: any[] = [];
  isLoading: boolean;
  designForm: FormGroup;
  editDesign: FormGroup;
  selectedDesign: any;

  constructor(private api: ApiService, private toastr: ToastrService) {
    this.designForm = new FormGroup({
      name: new FormControl(null, [Validators.required])
    });

    this.editDesign = new FormGroup({
      name: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
    this.getDesignations();
  }

  getDesignations()
  {
    this.api.getDesignations().subscribe(resp => {
      this.designations = resp.designations
    });
  }

  addDesignation()
  {
    this.isLoading = true;
    this.api.addDesignation(this.designForm.value).subscribe(resp => {
      console.log(resp);

      this.isLoading = false;

      this.toastr.success(resp.message, "Department add success");
      this.designForm.reset();
      this.getDesignations();
    ;
    },
    (err) => {
      this.isLoading = false;
      this.toastr.error(err, "Department add failed");
      console.error(err);
    })
  }

  setDesignation(dept: any)
  {
    this.selectedDesign = dept;
    this.editDesign.patchValue({name: dept.name});
  }

  updateDesignation()
  {
    this.isLoading = true;
    this.api.updateDesignation(this.selectedDesign._id, this.editDesign.value).subscribe(resp => {
      console.log(resp);

      this.isLoading = false;

      document.getElementById('editModalDismissBtn')?.click();
      this.toastr.success(resp.message, "Designations update success");
      this.getDesignations();
    ;
    },
    (err) => {
      this.isLoading = false;
      this.toastr.error(err, "Designations update failed");
      console.error(err);
    })
  }

  deleteDesignation()
  {
    this.isLoading = true;
    this.api.deleteDesignation(this.selectedDesign._id).subscribe(resp => {
      console.log(resp);
      this.isLoading = false;
      document.getElementById('modalDismissBtn')?.click();
      this.getDesignations();
    },
    (err) => {
      this.isLoading = false;
      console.error(err);
    })
  }
}
