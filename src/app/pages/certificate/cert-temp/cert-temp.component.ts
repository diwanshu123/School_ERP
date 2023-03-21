import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cert-temp',
  templateUrl: './cert-temp.component.html',
  styleUrls: ['./cert-temp.component.scss']
})
export class CertTempComponent {

  certi: any
  constructor(private api: ApiService, ) { }
  

  ngOnInit(): void {
    this.getCertificates()

  }
  getCertificates(){
    console.log("this");
    
    this.api.getCertificate().subscribe((res)=>{
      this.certi = res.data
      console.log(res, "certificates");
      
    })
  }
}
