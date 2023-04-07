import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cert-edit',
  templateUrl: './cert-edit.component.html',
  styleUrls: ['./cert-edit.component.scss']
})
export class CertEditComponent {

  certiForm: FormGroup
  certi: any;
  students: any[] = [];
  employees: any[] = [];
  selectedCert: any;
  isLoading: boolean;
  signImg: any;
  logoImg: any;
  backImg: any;

  constructor(
    private api: ApiService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  )
  {
    route.params.subscribe(param => {
      if(router.getCurrentNavigation()?.extras.state) {
        this.certi = router.getCurrentNavigation()?.extras.state?.['data'];
        this.createForm();
      }
    });
  }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents()
  {
    this.api.getAllStudents().subscribe((resp) => {
      this.students = resp.students;
      this.getAllEmployees();
    })
  }

  getAllEmployees()
  {
    this.api.getAllEmployees().subscribe((resp) => {
      this.employees = resp.employees;
      this.createForm();
    })
  }

  createForm()
  {
    this.certiForm =  new FormGroup ({
      name: new FormControl(this.certi.name, [Validators.required]),
      certType: new FormControl(this.certi.name, [Validators.required]),
      userId: new FormControl(this.certi.name, [Validators.required]),
      pageLayout: new FormControl(this.certi.pageLayout, [Validators.required]),
      userPhotoStyle: new FormControl(this.certi.userPhotoStyle, [Validators.required]),
      userPhotoSize: new FormControl(this.certi.userPhotoSize, [Validators.required]),
      top:  new FormControl(this.certi.layout.top, [Validators.required]),
      bottom: new FormControl(this.certi.layout.bottom, [Validators.required]),
      right: new FormControl(this.certi.layout.right, [Validators.required]),
      left: new FormControl(this.certi.layout.left, [Validators.required]),
      content: new FormControl(this.certi.layout.top, [Validators.required]),
    });
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

      this.toastr.success(resp.message, "Certificate update success");
    },
    (err) => {
      this.isLoading = false;
      this.toastr.error(err, "Certificate update failed");
      console.error(err);
    })
  }
}
