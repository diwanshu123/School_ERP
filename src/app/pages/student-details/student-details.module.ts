import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentDetailsRoutingModule } from './student-details-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentDetailsComponent } from './student-details.component';
import { StudentMainComponent } from './student-main/student-main.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentInfoComponent } from './student-info/student-info.component';


@NgModule({
  declarations: [
    StudentDetailsComponent,
    StudentMainComponent,
    StudentListComponent,
    StudentInfoComponent
  ],
  imports: [
    CommonModule,
    StudentDetailsRoutingModule,
    SharedModule
  ]
})
export class StudentDetailsModule { }
