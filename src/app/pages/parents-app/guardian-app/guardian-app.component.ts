import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';
import * as moment from 'moment';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-guardian-app',
  templateUrl: './guardian-app.component.html',
  styleUrls: ['./guardian-app.component.scss']
})
export class GuardianAppComponent {

  bannerForm: FormGroup;
  noticeForm: FormGroup;
  notificationForm: FormGroup;
  raisedTickets: any[];
  leaves: any[];
  isLoading: boolean;
  bannerFile: any;
  noticeFile: any;
  bannerImage: any;
  noticeImage: any;

  constructor(private api: ApiService, private toastr: ToastrService)
  {
    this.bannerForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
    });

    this.noticeForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required])
    });

    this.notificationForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {}

  addBanner()
  {
    this.isLoading = true;

    let postData = new FormData();
    postData.append('title', this.bannerForm.value.title);
    if(this.bannerFile) {
      postData.append("file", this.bannerFile);
    }

    this.api.addBanner(postData).subscribe(resp => {
      this.isLoading = false;
      this.toastr.success(resp.message, "Banner add success");
      this.bannerFile = this.bannerImage = null;
      this.bannerForm.reset();
    },
    (err) => {
      this.isLoading = false;
      this.toastr.error(err, "Banner add failed");
    });
  }

  addNotice()
  {
    this.isLoading = true;

    let postData = new FormData();
    postData.append('name', this.noticeForm.value.name);
    postData.append('noticeDate', moment().format("MM/DD/YYYY"));
    postData.append('description', this.noticeForm.value.description);
    if(this.noticeFile) {
      postData.append("file", this.noticeFile);
    }

    this.api.addNotice(postData).subscribe(resp => {
      this.isLoading = false;
      this.toastr.success(resp.message, "Notice board add success");
      this.noticeForm.reset();
    },
    (err) => {
      this.isLoading = false;
      this.toastr.error(err, "Notice board add failed");
    });
  }

  addNotification()
  {
    this.isLoading = true;
    this.api.addNotification(this.notificationForm.value).subscribe(resp => {
      this.isLoading = false;
      this.toastr.success(resp.message, "Notification add success");
      this.notificationForm.reset();
    },
    (err) => {
      this.isLoading = false;
      this.toastr.error(err, "Notification add failed");
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
          const reader = new FileReader();

          fileEntry.file((file: File) => {
            reader.readAsDataURL(file);
            reader.onload = () => {
                if(imgType == 'banner') {
                  this.bannerImage = reader.result;
                }
                else if(imgType == 'notice') {
                  this.noticeImage = reader.result;
                }
            };

            if(imgType == 'banner') {
              this.bannerFile = file;
            }
            else if(imgType == 'notice') {
              this.noticeFile = file;
            }
          })
        }
      }
    }
  }

  tabChange(event: MatTabChangeEvent) {
    if(event.index === 3) {
      this.getRaisedTickets();
    }
    else if(event.index === 4) {
      this.getAllLeaves();
    }
  }

  getRaisedTickets() {
    this.api.getRaisedTickets().subscribe(resp => {
      this.raisedTickets = resp.raiseATicket;
    });
  }

  getAllLeaves() {
    this.api.getLeaveApplication().subscribe(resp => {
      this.leaves = resp.leavesRequest;
    });
  }

}
