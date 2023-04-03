import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-mark-entry',
  templateUrl: './mark-entry.component.html',
  styleUrls: ['./mark-entry.component.scss']
})
export class MarkEntryComponent {

  exams: any
  constructor(private api: ApiService,private toastr: ToastrService  ) {}


  ngOnInit(): void {
  this.getAllExam()
}
  getAllExam(){
    console.log("this");
    
    this.api.getAllExam().subscribe((res)=>{
      this.exams = res.exams
      console.log(this.exams, "first res");
      
    })
  }
}
