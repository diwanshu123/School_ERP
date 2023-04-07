import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cert-emp',
  templateUrl: './cert-emp.component.html',
  styleUrls: ['./cert-emp.component.scss']
})
export class CertEmpComponent {

  certi: any[] = [];
  categories: any[] = [];
  filter = {
    role: '',
    template: ''
  }

  constructor(private api: ApiService, private toastr: ToastrService, private router: Router) {
  }

  ngOnInit(): void {
    this.getCertificates();
  }

  getCertificates()
  {
    let filter: string[] = [];
    if(this.filter.role.length) {
      filter.push('class=' + this.filter.role);
    }

    if(this.filter.template.length) {
      filter.push('template=' + this.filter.template)
    }

    this.api.getEmployeeCertificate(filter.length ? filter.join('&') : '').subscribe((res)=>{
      this.certi = res.certificates;
    });
  }
}
