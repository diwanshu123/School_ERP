import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  students: any[] = [];
  selectedStud: any;

  constructor(private api: ApiService, private toastr: ToastrService, private router: Router)
  {

  }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents()
  {
    this.api.getAllStudents().subscribe(resp => {
      this.students = resp.students;
    });
  }

  viewStudInfo(student: any)
  {
    let navExtras: NavigationExtras = {
      state: {student}
    };

    this.router.navigate(['/student-details/student-list/', student._id], navExtras);
  }

}
