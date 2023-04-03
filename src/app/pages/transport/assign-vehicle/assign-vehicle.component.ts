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

  constructor(private api: ApiService, private toastr: ToastrService, private router: Router)
  {
    this.vAssignForm = new FormGroup({
      route: new FormControl("select", [Validators.required]),
      stoppage: new FormControl("select", [Validators.required]),
      vehicle: new FormControl("select", [Validators.required]),
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
