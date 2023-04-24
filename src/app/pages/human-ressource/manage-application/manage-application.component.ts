import { Component, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

import * as _moment from 'moment';
const moment = _moment;

@Component({
  selector: 'app-manage-application',
  templateUrl: './manage-application.component.html',
  styleUrls: ['./manage-application.component.scss']
})
export class ManageApplicationComponent {
  employees: any[] = [];
  filteredEmp: any[] = []
  currentDate = Date();
  modalRef!: BsModalRef;
  formData:FormGroup;
  rowData: any;
  month:any;
  year:any;
 date:Date;
 
  constructor(private api: ApiService,private modalService: BsModalService,private toastr: ToastrService,){}
  ngOnInit(): void {
    
  }

  applyFilter(){
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    this.month = monthNames[this.date.getMonth()];
    this.year = this.date.getFullYear();
    this.getEmployees(this.month, this.year);
  }
  getEmployees(month, year)
  {
    this.api.getSalaryMonthWise(month, year).subscribe(resp => {
      this.employees = resp.salary_receipts;
    });
  }
  updateForm(data:any){
    this.formData = new FormGroup({
      id: new FormControl(data._id, [Validators.required]),
      paymentOption: new FormControl(data.salaryStatus, [Validators.required]),
      description: new FormControl(null)
    })
  }
  openModal(template: TemplateRef<any>, data: any) {
    this.updateForm(data);
    this.rowData = data;
    this.modalRef = this.modalService.show(template);
  }
  closePopup(){
    this.modalRef.hide();
  }
  updateStatus(data: any, rowData: any){
    console.log(data);
    this.rowData = {};
    let payload = {
      status:data.value.paymentOption,
      salaryPaidMonth:rowData.salaryMonth, 
      year:rowData.salaryYear,
      employee:rowData._id
    }    
    this.api.updateSalaryReceipt(payload).subscribe(resp => {
     this.toastr.success("Record updated Successfully", "Updated success");
     this.closePopup();
     this.getEmployees(this.month, this.year);
    },
    (err) => {
      this.toastr.error(err, " add failed");
      console.error(err);
    })
  }
}
