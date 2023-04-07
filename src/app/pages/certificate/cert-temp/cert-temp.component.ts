import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cert-temp',
  templateUrl: './cert-temp.component.html',
  styleUrls: ['./cert-temp.component.scss']
})
export class CertTempComponent {

  certiForm: FormGroup
  certi: any[] = [];
  students: any[] = [];
  employees: any[] = [];
  selectedCert: any;
  isLoading: boolean;
  signImg: any;
  logoImg: any;
  backImg: any;

  constructor(private api: ApiService, private toastr: ToastrService, private router: Router) {
    this.certiForm =  new FormGroup ({
      name: new FormControl(null, [Validators.required]),
      certType: new FormControl('select', [Validators.required]),
      userId: new FormControl('select', [Validators.required]),
      pageLayout: new FormControl('select', [Validators.required]),
      userPhotoStyle: new FormControl('select', [Validators.required]),
      userPhotoSize: new FormControl(null, [Validators.required]),
      top:  new FormControl(null, [Validators.required]),
      bottom: new FormControl(null, [Validators.required]),
      right: new FormControl(null, [Validators.required]),
      left: new FormControl(null, [Validators.required]),
      content: new FormControl(null, [Validators.required]),
    });
   }

  ngOnInit(): void
  {
    this.getCertificates();
    this.getAllStudents();
    this.getAllEmployees();
  }

  getCertificates()
  {
    this.api.getCertificate().subscribe((res)=>{
      this.certi = res.certificates
    });
  }

  getAllStudents()
  {
    this.api.getAllStudents().subscribe((resp) => {
      this.students = resp.students;
    })
  }

  getAllEmployees()
  {
    this.api.getAllEmployees().subscribe((resp) => {
      this.employees = resp.employees;
    })
  }

  onFilesDropped(files: NgxFileDropEntry[], imgType: string)
  {
    console.log(files);
    if(files.length > 1) {
      alert('Please upload a single file');
    }
    else
    {
      for(const droppedFile of files) {
        if(droppedFile.fileEntry.isFile)
        {
          const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
          fileEntry.file((file: File) => {
            if(imgType == 'signImg') {
              this.signImg = file;
            }
            else if(imgType == 'logoImg') {
              this.logoImg = file;
            }
            else if(imgType == 'backImg') {
              this.backImg = file;
            }
          })
        }
      }
    }
  }

  createCerti()
  {
    console.log(this.certiForm.value);

    this.isLoading = true;

    let postData = new FormData();
    postData.append("name", this.certiForm.value.name);
    if(this.certiForm.value.certType == 'student') {
      postData.append("applicableStudent", this.certiForm.value.userId);
    }
    else if(this.certiForm.value.certType == 'employee') {
      postData.append("applicableEmployee", this.certiForm.value.userId);
    }
    postData.append("pageLayout", this.certiForm.value.pageLayout);
    postData.append("userPhotoStyle", this.certiForm.value.userPhotoStyle);
    postData.append("userPhotoSize", this.certiForm.value.userPhotoSize);

    const layoutSpacing = {
      top: this.certiForm.value.top,
      bottom: this.certiForm.value.bottom,
      left: this.certiForm.value.left,
      right: this.certiForm.value.right
    };

    postData.append("layoutSpacing", JSON.stringify(layoutSpacing));
    if(this.signImg) {
      postData.append("signatureImage", this.signImg);
    }
    if(this.logoImg) {
      postData.append("logoImage", this.logoImg);
    }
    if(this.backImg) {
      postData.append("backgroundImage", this.backImg);
    }

    this.api.createCertificate(postData).subscribe(resp => {
      console.log(resp);

      this.isLoading = false;

      this.toastr.success(resp.message, "Certificate add success");
      this.getCertificates();
    },
    (err) => {
      this.isLoading = false;
      this.toastr.error(err, "Certificate add failed");
      console.error(err);
    })
  }

  editCert(cert: any)
  {
    const navExtras: NavigationExtras = {
      state: {
        data: cert
      }
    };

    this.router.navigate(["/cert/template/", cert._id], navExtras);
  }

  deleteCertificate()
  {
    this.isLoading = true;
    this.api.deleteCertificate(this.selectedCert._id).subscribe(resp => {
      console.log(resp);
      this.isLoading = false;
      document.getElementById('modalDismissBtn')?.click();
      this.getCertificates();
    },
    (err) => {
      this.isLoading = false;
      console.error(err);
    })
  }
}
