import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceptionRoutingModule } from './reception-routing.module';
import { AdmissionEnqComponent } from './admission-enq/admission-enq.component';
import { CallLogComponent } from './call-log/call-log.component';
import { VisitorLogComponent } from './visitor-log/visitor-log.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    AdmissionEnqComponent,
    CallLogComponent,
    VisitorLogComponent
  ],
  imports: [
    CommonModule,
    ReceptionRoutingModule,
    MatTabsModule,
    SharedModule
  ]
})
export class ReceptionModule { }
