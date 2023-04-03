import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-route-master',
  templateUrl: './route-master.component.html',
  styleUrls: ['./route-master.component.scss']
})
export class RouteMasterComponent implements OnInit {

  routes: any[] = [];
  routeForm: FormGroup;
  selectedRoute: any;
  isLoading: boolean;

  constructor(private api: ApiService, private toastr: ToastrService, private router: Router)
  {
    this.routeForm = new FormGroup({
      routeName: new FormControl(null, [Validators.required]),
      startPlace: new FormControl(null, [Validators.required]),
      stopPlace: new FormControl(null, [Validators.required]),
      remarks: new FormControl(null)
    });
  }

  ngOnInit(): void {
    this.getAllRoutes();
  }

  getAllRoutes()
  {
    this.api.getAllRoutes().subscribe(resp => {
      this.routes = resp.routes;
    });
  }

  addRoute()
  {
    this.isLoading = true;
    this.api.addRoute(this.routeForm.value).subscribe(resp => {
      this.isLoading = false;
      this.toastr.success(resp.message, "Route add success");
      this.routeForm.reset();
      this.getAllRoutes();
    },
    (err) => {
      this.isLoading = false;
      this.toastr.error(err, "Route add failed");
    });
  }

  editRoute(route: any)
  {
    this.selectedRoute = route;
    const navExtras: NavigationExtras = {
      state: {
        data: this.selectedRoute
      }
    };

    this.router.navigate(["/transport/route/", this.selectedRoute._id], navExtras);
  }

  deleteRoute()
  {
    this.isLoading = true;
    this.api.deleteRoute(this.selectedRoute._id).subscribe(resp => {
      console.log(resp);
      this.isLoading = false;
      document.getElementById('modalDismissBtn')?.click();
      this.getAllRoutes();
    },
    (err) => {
      this.isLoading = false;
      console.error(err);
    })
  }
}
