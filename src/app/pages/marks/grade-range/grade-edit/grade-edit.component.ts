import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-grade-edit',
  templateUrl: './grade-edit.component.html',
  styleUrls: ['./grade-edit.component.scss']
})
export class GradeEditComponent {
  isLoading: boolean;
  gradeForm : FormGroup
  grade: any;
  selectedGrade: any;
  grades:any [] ;

  constructor(private api: ApiService,private toastr: ToastrService  ) {
  // 
  }
}
