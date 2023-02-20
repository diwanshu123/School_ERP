import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentDetailsRoutingModule } from './student-details-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentDetailsComponent } from './student-details.component';


@NgModule({
  declarations: [
    StudentDetailsComponent
  ],
  imports: [
    CommonModule,
    StudentDetailsRoutingModule,
    SharedModule
  ]
})
export class StudentDetailsModule { }
