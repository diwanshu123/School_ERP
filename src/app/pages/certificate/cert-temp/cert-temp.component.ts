import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cert-temp',
  templateUrl: './cert-temp.component.html',
  styleUrls: ['./cert-temp.component.scss']
})
export class CertTempComponent {
  certiForm: FormGroup
  certi: any
  isLoading: boolean;
  constructor(private api: ApiService,private toastr: ToastrService ,private route: Router  ) {
    this.certiForm =  new FormGroup ({
      name: new FormControl(null, [Validators.required]),
      applicableStudent: new FormControl(null, [Validators.required]),
      pageLayout: new FormControl(null, [Validators.required]),
      userPhotoStyle: new FormControl(null, [Validators.required]),
      userPhotoSize: new FormControl(null, [Validators.required]),
      layoutSpacing: new FormControl(null, [Validators.required]),
      content: new FormControl(null, [Validators.required]),



    })
   }
  

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
  createCerti()
  {
    console.log(this.certiForm.value);
    
    this.isLoading = true;
    this.api.createCertificate(this.certiForm.value).subscribe(resp => {
      console.log(resp);
      
      this.isLoading = false;

      this.toastr.success(resp.message, "exams  add success");
      this.getCertificates();
    ;
    },
    (err) => {
      this.isLoading = false;
      this.toastr.error(err, "exams  add failed");
      console.error(err);
    })
  }
}
