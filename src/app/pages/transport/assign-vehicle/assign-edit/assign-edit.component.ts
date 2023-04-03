import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-assign-edit',
  templateUrl: './assign-edit.component.html',
  styleUrls: ['./assign-edit.component.scss']
})
export class AssignEditComponent {

  assigns: any[] = []
  routes: any[] = [];
  vehicles: any[] = [];
  stopPages: any[] = [];
  assignId: any;
  vAssignForm: FormGroup;
  editAssign: any;
  isLoading: boolean;

  constructor(
    private api: ApiService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  )
  {
    route.params.subscribe(param => {
      if(router.getCurrentNavigation()?.extras.state) {
        this.editAssign = router.getCurrentNavigation()?.extras.state?.['data'];
        this.assignId = this.editAssign._id;
        this.createForm();
      }
    });
  }

  ngOnInit(): void {
    this.getAllRoutes();
  }

  createForm()
  {
    this.vAssignForm = new FormGroup({
      route: new FormControl("select", [Validators.required]),
      stoppage: new FormControl("select", [Validators.required]),
      vehicle: new FormControl("select", [Validators.required]),
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
      this.patchFormData();
    });
  }

  patchFormData()
  {
    this.vAssignForm.patchValue({
      route: this.editAssign.route._id,
      stoppage: this.editAssign.stoppage._id,
      vehicle: this.editAssign.vehicle._id,
    });
  }

  updateAssignVehicle()
  {
    this.isLoading = true;
    this.api.updateAssignVehicle(this.assignId, this.vAssignForm.value).subscribe(resp => {
      this.isLoading = false;
      this.toastr.success(resp.message, "Vehicle assign update success");
    },
    (err) => {
      this.isLoading = false;
      this.toastr.error(err, "Vehicle assign update failed");
    });
  }
}
