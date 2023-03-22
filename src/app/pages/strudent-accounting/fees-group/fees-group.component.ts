import { Component, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'app-fees-group',
  templateUrl: './fees-group.component.html',
  styleUrls: ['./fees-group.component.scss']
})
export class FeesGroupComponent {
  feeTypes: any[] = [];
  feeGroups: any[] = [];
  masterSelected:boolean;
  // checklist:any;
  // checkedList:any;

  

  constructor(private api: ApiService, private toastr: ToastrService)
  {
  //   this.feeTypeForm = new FormGroup({
  //     name: new FormControl(null, [Validators.required]),
  //     description: new FormControl(null, [Validators.required]),
  //   });
  }

  @ViewChild('paginator') paginator: MatPaginator;
  pageSizes = [3, 5, 7];

  ngOnInit(): void {
    this.feeTypeList();
    this.feeTypeListGroup()
  }


  feeTypeList()
  {
    this.api.feeTypeList().subscribe((res: any)=> {
      this.feeTypes = res.feeTypes;
      // this.feeTypes.paginator = this.paginator
      console.log(res);
    })

    
  }
  
  feeTypeListGroup()
  {
    this.api.feeTypeGroup().subscribe((res: any)=> {
      this.feeGroups = res.feeGroups;
      
      console.log(res, "feeTypesGroup");
    })

    
  }



  checkUncheckAll() {
    this.masterSelected = false
    for (var i = 0; i < this.feeTypes.length; i++) {
      this.feeTypes[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }
  
  // Check All Checkbox Checked
  isAllSelected() {
    this.masterSelected = this.feeTypes.every(function(item:any) {
        return item.isSelected == true;
      })
    this.getCheckedItemList();
  }
   // Get List of Checked Items
   getCheckedItemList(){
    this.feeTypes = [];
    for (var i = 0; i < this.feeTypes.length; i++) {
      if(this.feeTypes[i].isSelected)
      this.feeTypes.push(this.feeTypes[i]);
    }
    // this.feeTypes = JSON.stringify(this.feeTypes);
  }

}
