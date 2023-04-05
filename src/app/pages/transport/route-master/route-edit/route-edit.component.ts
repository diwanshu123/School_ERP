import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-route-edit',
  templateUrl: './route-edit.component.html',
  styleUrls: ['./route-edit.component.scss'] 
})
export class RouteEditComponent implements OnInit {
 
  routeId: string;
  editRoute: any;
  routeForm: FormGroup;
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
        this.editRoute = router.getCurrentNavigation()?.extras.state?.['data'];
        this.routeId = this.editRoute._id;
       
        
        this.createForm();
      }
    });
  }

  ngOnInit(): void {
    
  }

  createForm()
  {
    this.routeForm = new FormGroup({
      routeName: new FormControl(this.editRoute.routeName, [Validators.required]),
      startPlace: new FormControl(this.editRoute.startPlace, [Validators.required]),
      stopPlace: new FormControl(this.editRoute.stopPlace, [Validators.required]),
      remarks: new FormControl(this.editRoute.remarks)
    });
  }

  updateRoute()
  {
    this.isLoading = true;
    this.api.updateRoute(this.routeId, this.routeForm.value).subscribe(resp => {
      this.isLoading = false;
      this.toastr.success(resp.message, "Route update success");
    },
    (err) => {
      this.isLoading = false;
      this.toastr.error(err, "Route update failed");
    });
  }

}
