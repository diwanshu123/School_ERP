import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransportRoutingModule } from './transport-routing.module';
import { RouteMasterComponent } from './route-master/route-master.component';
import { VehicleMasterComponent } from './vehicle-master/vehicle-master.component';
import { StopPageComponent } from './stop-page/stop-page.component';
import { AssignVehicleComponent } from './assign-vehicle/assign-vehicle.component';
import { ReportComponent } from './report/report.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    RouteMasterComponent,
    VehicleMasterComponent,
    StopPageComponent,
    AssignVehicleComponent,
    ReportComponent
  ],
  imports: [
    CommonModule,
    TransportRoutingModule,
    MatTabsModule,
    SharedModule
  ]
})
export class TransportModule { }
