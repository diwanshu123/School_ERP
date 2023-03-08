import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignVehicleComponent } from './assign-vehicle/assign-vehicle.component';
import { ReportComponent } from './report/report.component';
import { RouteMasterComponent } from './route-master/route-master.component';
import { StopPageComponent } from './stop-page/stop-page.component';
import { VehicleMasterComponent } from './vehicle-master/vehicle-master.component';

const routes: Routes = [
  {
    path: 'route',
    component: RouteMasterComponent
  },
  {
    path: 'vehicle',
    component: VehicleMasterComponent
  },
  {
    path: 'stop',
    component: StopPageComponent
  },
  {
    path: 'assign',
    component: AssignVehicleComponent
  },
  {
    path: 'report',
    component: ReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportRoutingModule { }
