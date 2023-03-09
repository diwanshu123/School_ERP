import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignTeacherComponent } from './assign-teacher/assign-teacher.component';
import { ClassAssignComponent } from './class-assign/class-assign.component';
import { ClassScheduleAddComponent } from './class-schedule-add/class-schedule-add.component';
import { ClassScheduleComponent } from './class-schedule/class-schedule.component';
import { ControlClassComponent } from './control-class/control-class.component';
import { SubjectComponent } from './subject/subject.component';
import { TeacherScheduleComponent } from './teacher-schedule/teacher-schedule.component';

const routes: Routes = [
  {
    path: "class",
    component: ControlClassComponent
  },
  {
    path: "assign",
    component: AssignTeacherComponent
  },
  {
    path: "subject",
    component: SubjectComponent
  },
  {
    path: "class-assign",
    component: ClassAssignComponent
  },
  {
    path: "class-schedule",
    component: ClassScheduleComponent
  },
  {
    path: "class-schedule/add",
    component: ClassScheduleAddComponent
  },
  {
    path: "teacher-schedule",
    component: TeacherScheduleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicRoutingModule { }
