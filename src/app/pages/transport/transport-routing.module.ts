import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignEditComponent } from './assign-vehicle/assign-edit/assign-edit.component';
import { AssignVehicleComponent } from './assign-vehicle/assign-vehicle.component';
import { ExpenseReportComponent } from './expense-report/expense-report.component';
import { ReportComponent } from './report/report.component';
import { RouteEditComponent } from './route-master/route-edit/route-edit.component';
import { RouteMasterComponent } from './route-master/route-master.component';
import { StopEditComponent } from './stop-page/stop-edit/stop-edit.component';
import { StopPageComponent } from './stop-page/stop-page.component';
import { VehicleEditComponent } from './vehicle-master/vehicle-edit/vehicle-edit.component';
import { VehicleMasterComponent } from './vehicle-master/vehicle-master.component';

const routes: Routes = [
  {
    path: 'route',
    component: RouteMasterComponent
  },
  {
    path: 'route/:id',
    component: RouteEditComponent
  },
  {
    path: 'vehicle',
    component: VehicleMasterComponent
  },
  {
    path: 'vehicle/:id',
    component: VehicleEditComponent
  },
  {
    path: 'stop',
    component: StopPageComponent
  },
  {
    path: 'stop/:id',
    component: StopEditComponent
  },
  {
    path: 'assign',
    component: AssignVehicleComponent
  },
  {
    path: 'assign/:id',
    component: AssignEditComponent
  },
  {
    path: 'alloc-report',
    component: ReportComponent
  },
  {
    path: 'expense',
    component: ExpenseReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportRoutingModule { }
