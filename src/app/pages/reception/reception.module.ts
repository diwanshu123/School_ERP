import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceptionRoutingModule } from './reception-routing.module';
import { AdmissionEnqComponent } from './admission-enq/admission-enq.component';
import { CallLogComponent } from './call-log/call-log.component';
import { VisitorLogComponent } from './visitor-log/visitor-log.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import {MatFormFieldModule} from '@angular/material/form-field';



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
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatMomentDateModule,
    NgxMaterialTimepickerModule,
    MatFormFieldModule
  ]
})
export class ReceptionModule { }
