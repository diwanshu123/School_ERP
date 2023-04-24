import { Component, TemplateRef } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
 
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  categoryData: any[];
  categoryForm:FormGroup;
  modalRef!: BsModalRef;
  categoryId: any;
  constructor(private api: ApiService, private toastr: ToastrService, private router: Router,private modalService: BsModalService){

  }
  ngOnInit(): void {    
    this.getAllCateogy();
    this.createForm();
  }
  getAllCateogy(){
    this.api.getCategory().subscribe(data =>{
      this.categoryData = data.categories;
     });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.categoryForm.controls;
  }
  createForm(){
    this.categoryForm = new FormGroup({
      categoryName: new FormControl(null, [Validators.required]),
      branch:new FormControl('Oxford International'),
      description: new FormControl(null)
    })
  }
  updateForm(data: {categoryName: any; _id: any; }){
    this.categoryForm = new FormGroup({
      id: new FormControl(data._id, [Validators.required]),
      categoryName: new FormControl(data.categoryName, [Validators.required]),
      branch:new FormControl('Oxford International'),
      description: new FormControl(null)
    })
  }
  openModal(template: TemplateRef<any>, data: any) {
    this.updateForm(data);
    this.modalRef = this.modalService.show(template);
  }
  openDeleteModal(template: TemplateRef<any>, data: any){
    this.categoryId = data._id;
    this.modalRef = this.modalService.show(template);
  }
  addCategory(formdata:any){
    
    let payload = {
      categoryName:formdata.value.categoryName,
      branch:formdata.value.branch, 
      description:formdata.value.description
    }
    
    this.api.saveCategory(payload).subscribe(resp => {
      console.log(resp);
      this.toastr.success(resp.message, "Added success");
      this.getAllCateogy();
      this.categoryForm.reset();
    },
    (err) => {
      this.toastr.error(err, " add failed");
      console.error(err);
    })
  }
  updateCategory(formdata:any){
    console.log(formdata.value);
    let payload = {
      id:formdata.value.id,
      categoryName:formdata.value.categoryName,
      branch:formdata.value.branch, 
      description:formdata.value.description
    }
    this.api.updateCategory(payload).subscribe(resp => {
      this.closePopup();
      this.toastr.success(resp.message, "Updated success");
      this.getAllCateogy();
      this.categoryForm.reset();
     
  // this.getExamTerms();
    },
    (err) => {
      this.toastr.error(err, " update failed");
      console.error(err);
    })
  }
  deletePopup(){
    this.api.deleteCategory(this.categoryId).subscribe(resp => {
      this.closePopup();
      this.toastr.success(resp.message, "Deleted success");
      this.getAllCateogy();
    },
    (err) => {
      this.toastr.error(err, " update failed");
      console.error(err);
    })
  }
  closePopup(){
    this.modalRef.hide();
  }
}
