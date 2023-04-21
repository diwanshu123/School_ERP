import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {
  sections: any[] = [];
  classes: any[] = [];
  constructor(private api: ApiService, private toastr: ToastrService, private router: Router){
   this.getAllClass() ;
   this.getAllSection()
  }


  
  getAllSection(){
   
  
    this.api.getAllSection().subscribe(resp => {
      console.log(resp);
      
      this.sections = resp.sections
    });

}

getAllClass(){
 

  this.api.getAllClass().subscribe(resp => {
    console.log(resp);
    
    this.classes = resp.classes
  });

}
}
