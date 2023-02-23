import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentDetailsRoutingModule } from './student-details-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentDetailsComponent } from './student-details.component';
import { StudentMainComponent } from './student-main/student-main.component';


@NgModule({
  declarations: [
    StudentDetailsComponent,
    StudentMainComponent
  ],
  imports: [
    CommonModule,
    StudentDetailsRoutingModule,
    SharedModule
  ]
})
export class StudentDetailsModule { }
