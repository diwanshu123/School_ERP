import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.scss']
})
export class StudentInfoComponent implements OnInit {

  student: any
  studentId:any;
  constructor(
    private api: ApiService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  )
  {
    route.params.subscribe(param => {
     this.studentId = param['id'];
    });
  }

  ngOnInit(): void {
    this.getStudentData();
  }
  getStudentData(){
    this.api.getStudentById(this.studentId).subscribe(resp => {
      this.student = resp['student'];
    });
  }

}
