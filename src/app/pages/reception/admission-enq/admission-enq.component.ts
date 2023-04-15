import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admission-enq',
  templateUrl: './admission-enq.component.html',
  styleUrls: ['./admission-enq.component.scss']
})
export class AdmissionEnqComponent {


  addEnquiryForm: FormGroup
  isLoading: boolean;

  
  constructor(private api: ApiService,private toastr: ToastrService  ) {
    this.addEnquiryForm =  new FormGroup ({
      name: new FormControl(null, [Validators.required]),
    
    });
    // this.editTermForm =  new FormGroup ({
     
    //   examTermId: new FormControl(null, [Validators.required]),

    //   name: new FormControl(null, [Validators.required]),
    
    // });
   


 

  }
  exam:any
  ngOnInit(): void {
    // this.getExamTerms() 
    // this.getMarksDiturbution() 
  }


  addDEnquery()
  {
    // console.log(this.examTermForm.value);
    
    this.isLoading = true;
    this.api.addEnquery(this.addEnquiryForm.value).subscribe(resp => {
      console.log(resp);
      
      this.isLoading = false;

      this.toastr.success(resp.message, "add success");
     
  // this.getExamTerms();
    },
    (err) => {
      this.isLoading = false; 
      this.toastr.error(err, " add failed");
      console.error(err);
    })
  }

  getEnquery(){
    console.log("this");
    
  //   this.api.getExamTerms().subscribe((res)=>{
  //     this.examTerms = res.examTerms
  //     console.log(this.examTerms, "first res");
      
  //   })
  }
}
