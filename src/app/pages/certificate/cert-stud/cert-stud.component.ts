import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cert-stud',
  templateUrl: './cert-stud.component.html',
  styleUrls: ['./cert-stud.component.scss']
})
export class CertStudComponent {

  certi: any[] = [];
  categories: any[] = [];
  filter = {
    class: '',
    section: '',
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
    if(this.filter.class.length) {
      filter.push('class=' + this.filter.class);
    }

    if(this.filter.section.length) {
      filter.push('section=' + this.filter.section);
    }

    if(this.filter.template.length) {
      filter.push('template=' + this.filter.template)
    }

    this.api.getStudentCertificate(filter.length ? filter.join('&') : '').subscribe((res)=>{
      this.certi = res.certificates;
    });
  }
}
