import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-assign-vehicle',
  templateUrl: './assign-vehicle.component.html',
  styleUrls: ['./assign-vehicle.component.scss']
})
export class AssignVehicleComponent {

  assigns: any[] = []
  routes: any[] = [];
  vehicles: any[] = [];
  stopPages: any[] = [];
  vAssignForm: FormGroup;
  selectedAssign: any;
  isLoading: boolean;
  ExpensForm :FormGroup
  fileData: any;
  constructor(private api: ApiService, private toastr: ToastrService, private router: Router)
  {
    this.vAssignForm = new FormGroup({
      route: new FormControl("select", [Validators.required]),
      stoppage: new FormControl("select", [Validators.required]),
      vehicle: new FormControl("select", [Validators.required]),
    });
    this.ExpensForm = new FormGroup({
      vehicleId: new FormControl("select", [Validators.required]),
      expenseName: new FormControl(null, [Validators.required]),
      expenseValue: new FormControl(null, [Validators.required]),
      expenseTime: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),

    });
  }

  ngOnInit(): void {
    this.getAllVehicleAssigns();
    this.getAllRoutes();
  }

  getAllVehicleAssigns()
  {
    this.api.getAllVehicleAssigns().subscribe(resp => {
      this.assigns = resp.vehicleRoutes;
    });
  }

  AddExpense(){
    console.log(this.ExpensForm.value);
    
    // let postData = new FormData();
    // postData.append("vehicleId", this.ExpensForm.value.vehicleId);
    // postData.append("expenseName", this.ExpensForm.value.expenseName);
    // postData.append("expenseValue", this.ExpensForm.value.expenseValue);
    // postData.append("expenseTime", this.ExpensForm.value.expenseTime);
    // postData.append("description", this.ExpensForm.value.description);
    // if(this.fileData) {
    //   postData.append("file", this.fileData);
    // }
   
   
    // console.log(postData);
    this.api.addExpensReport(this.ExpensForm.value ).subscribe(resp => {
    console.log(resp);
  
      this.isLoading = false;
      this.toastr.success(resp.message, "Add Expense  success");
      this.fileData = null;
  
     
    },
    (err) => {
      this.isLoading = false;
      this.toastr.error(err, " add failed");
    })
  }
  

  getAllRoutes()
  {
    this.api.getAllRoutes().subscribe(resp => {
      this.routes = resp.routes;
      this.getAllStopPages();
    });
  }

  getAllStopPages()
  {
    this.api.getAllStopPages().subscribe(resp => {
      this.stopPages = resp.stoppages;
      this.getAllVehicles();
    });
  }

  getAllVehicles()
  {
    this.api.getAllVehicles().subscribe(resp => {
      this.vehicles = resp.vehicles;
    });
  }

  assignVehicle()
  {
    this.isLoading = true;
    this.api.assignVehicle(this.vAssignForm.value).subscribe(resp => {
      this.isLoading = false;
      this.toastr.success(resp.message, "Vehicle assign success");
      this.vAssignForm.reset();
      this.getAllVehicleAssigns();
    },
    (err) => {
      this.isLoading = false;
      this.toastr.error(err, "Vehicle assign failed");
    });
  }

  editAssignVehicle(route: any)
  {
    this.selectedAssign = route;
    const navExtras: NavigationExtras = {
      state: {
        data: this.selectedAssign
      }
    };

    this.router.navigate(["/transport/assign/", this.selectedAssign._id], navExtras);
  }

  deleteAssignVehicle()
  {
    this.isLoading = true;
    this.api.deleteAssignVehicle(this.selectedAssign._id).subscribe(resp => {
      console.log(resp);
      this.isLoading = false;
      document.getElementById('modalDismissBtn')?.click();
      this.getAllVehicleAssigns();
    },
    (err) => {
      this.isLoading = false;
      console.error(err);
    })
  }
}
