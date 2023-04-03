import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-stop-edit',
  templateUrl: './stop-edit.component.html',
  styleUrls: ['./stop-edit.component.scss']
})
export class StopEditComponent {

  stopId: string;
  editStop: any;
  stopForm: FormGroup;
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
        this.editStop = router.getCurrentNavigation()?.extras.state?.['data'];
        this.stopId = this.editStop._id;
        this.createForm();
        console.log(this.editStop);
      }
    });
  }

  ngOnInit(): void {}

  createForm()
  {
    this.stopForm = new FormGroup({
      stoppageName: new FormControl(this.editStop.stoppageName, [Validators.required]),
      stopTime: new FormControl(this.editStop.stopTime, [Validators.required]),
      routeFare: new FormControl(this.editStop.routeFare, [Validators.required])
    });
  }

  updateStopPage()
  {
    this.isLoading = true;
    this.api.updateStopPage(this.stopId, this.stopForm.value).subscribe(resp => {
      this.isLoading = false;
      this.toastr.success(resp.message, "Stop Page update success");
    },
    (err) => {
      this.isLoading = false;
      this.toastr.error(err, "Stop Page update failed");
    });
  }
}
