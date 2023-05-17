import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { StudentService } from '../../student-details/student.service';



@Component({ 
  selector: 'app-fee-type',
  templateUrl: './fee-type.component.html',
  styleUrls: ['./fee-type.component.scss']
})
export class FeeTypeComponent {
  feeTypeForm: FormGroup;
  feeTypes: any[] = [
    {AcedmicYear:"2023-2024", class:"1", amount:"10, 000", id:"dhfgy12341", remarks:"good", updatedAmount:"11, 000"},
    {AcedmicYear:"2023-2024", class:"2", amount:"20, 000", id:"dhfgy12342", remarks:"good", updatedAmount:"22, 000"},
    {AcedmicYear:"2023-2024", class:"3", amount:"30, 000", id:"dhfgy12343", remarks:"good", updatedAmount:"33, 000"},
    {AcedmicYear:"2023-2024", class:"4", amount:"40, 000 s", id:"dhfgy12344", remarks:"good", updatedAmount:"44, 000"},
    {AcedmicYear:"2023-2024", class:"5", amount:"50, 000", id:"dhfgy12345", remarks:"good", updatedAmount:"55, 000"},
    {AcedmicYear:"2023-2024", class:"6", amount:"60, 000", id:"dhfgy12346", remarks:"good", updatedAmount:"66, 000"},
    {AcedmicYear:"2023-2024", class:"7", amount:"70, 000", id:"dhfgy12347", remarks:"good", updatedAmount:"77, 000"},
    {AcedmicYear:"2023-2024", class:"8", amount:"80, 000", id:"dhfgy12348", remarks:"good", updatedAmount:"88, 000"},
    {AcedmicYear:"2023-2024", class:"9", amount:"90, 000", id:"dhfgy12349", remarks:"good", updatedAmount:"99, 000"},
    {AcedmicYear:"2023-2024", class:"10", amount:"100, 000", id:"dhfgy12310", remarks:"good", updatedAmount:"110, 000"},
    {AcedmicYear:"2023-2024", class:"11", amount:"110, 000", id:"dhfgy12311", remarks:"good", updatedAmount:"121, 000"},
    {AcedmicYear:"2023-2024", class:"12", amount:"120, 000", id:"dhfgy12312", remarks:"good", updatedAmount:"132, 000"}
  ];
  AcedmicYearList : any[] = [
    {year: "2023-2024", id:1},
    {year: "2024-2025", id:2},
    {year: "2025-2026", id:3},
    {year: "2026-2027", id:4},
    
  ];
  isLoading: boolean;
  selectedfee: any;
  selectedFee: any;

  constructor(private api: ApiService, private toastr: ToastrService,
    private route: ActivatedRoute, private studentService: StudentService, 
    private router: Router)
  {
    this.feeTypeForm = new FormGroup({
      AcedmicYear: new FormControl(null, [Validators.required]),
      class: new FormControl(null, [Validators.required]),
      amount: new FormControl(null, [Validators.required]),
      remarks: new FormControl(null, [Validators.required]),
      upDdatedAmount: new FormControl(null, [Validators.required]),

    });
  }

  ngOnInit(): void {
    // this.feeTypeList();
  }
  deleteFine()
  {
    this.isLoading = true;
    this.api.deleteFeeType(this.selectedfee._id).subscribe(resp => {
      console.log(resp);
      this.isLoading = false;
      document.getElementById('modalDismissBtn')?.click();
      this.feeTypeList();
    },
    (err) => {
      this.isLoading = false;
      console.error(err);
    })
  }
  addFeeType()
  {
    this.isLoading = true;
    let postData = this.feeTypeForm.value;
    let code = postData.name
    code = code.replace(/ /g, "-") + "h";
    postData['code'] = code;
    this.api.addFeeType(postData).subscribe((res)=>{
      this.isLoading = false;
      console.log(res, "first res");
      this.toastr.success(res.message, "Fee add success");
    },
    (err) => {
      this.isLoading = false;
      this.toastr.error(err, "Fee add failed");
      console.error(err);
    }
    )
  }

  feeTypeList()
  {
    this.api.feeTypeList().subscribe((res: any)=> {
      // this.feeTypes = res.feeTypes;
      console.log(res);
    })
  }

  editFeeType(route: any)
  {
    console.log(route);
    // this.studentService.setData(this.feeTypes)
    this.selectedFee = route;
    const navExtras: NavigationExtras = {
      state: {
        data: this.selectedFee
      }
    };

    this.router.navigate(["/student-acconting/fees-type/", this.selectedFee._id], navExtras);
  }

}
