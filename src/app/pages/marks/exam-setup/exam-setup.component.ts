import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'app-exam-setup',
  templateUrl: './exam-setup.component.html',
  styleUrls: ['./exam-setup.component.scss']
})
export class ExamSetupComponent {
  allExam: any
  constructor(private api: ApiService, ) { }


  ngOnInit(): void {
    this.getAllExam()

  }
  getAllExam(){
    console.log("this");
    
    this.api.getAllExam().subscribe((res)=>{
      this.allExam = res.data
      console.log(res, "first res");
      
    })
  }

}
