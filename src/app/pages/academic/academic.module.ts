import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicRoutingModule } from './academic-routing.module';
import { ControlClassComponent } from './control-class/control-class.component';
import { AssignTeacherComponent } from './assign-teacher/assign-teacher.component';
import { SubjectComponent } from './subject/subject.component';
import { ClassScheduleComponent } from './class-schedule/class-schedule.component';
import { TeacherScheduleComponent } from './teacher-schedule/teacher-schedule.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { ClassAssignComponent } from './class-assign/class-assign.component';
import { ClassScheduleAddComponent } from './class-schedule-add/class-schedule-add.component';


@NgModule({
  declarations: [
    ControlClassComponent,
    AssignTeacherComponent,
    SubjectComponent,
    ClassScheduleComponent,
    TeacherScheduleComponent,
    ClassAssignComponent,
    ClassScheduleAddComponent
  ],
  imports: [
    CommonModule,
    AcademicRoutingModule,
    MatTabsModule,
    SharedModule
  ]
})
export class AcademicModule { }
