import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-assign-teacher',
  templateUrl: './assign-teacher.component.html',
  styleUrls: ['./assign-teacher.component.scss']
})
export class AssignTeacherComponent {     
  isLoading: boolean;

  TeacherForm: FormGroup
  
  constructor(private api: ApiService, private toastr: ToastrService) {
    this.TeacherForm = new FormGroup({
      name: new FormControl(null, [Validators.required])
    });

  //   this.editDesign = new FormGroup({
  //     name: new FormControl(null, [Validators.required])
  //   });
  }

  ngOnInit(): void {
    // this.getDesignations();
  }

  getTeacherList()
  {
  //   this.api.getDesignations().subscribe(resp => {
  //     this.designations = resp.designations
    // });
  }

  addTeachernew()
  {
    this.isLoading = true;
    this.api.addTeacher(this.TeacherForm.value).subscribe(resp => {
      console.log(resp);

      this.isLoading = false;

      this.toastr.success(resp.message, " add success");
      this.TeacherForm.reset();
      this.getTeacherList();
    ;
    },
    (err) => {
      this.isLoading = false;
      this.toastr.error(err, "Department add failed");
      console.error(err);
    })
  }


}
