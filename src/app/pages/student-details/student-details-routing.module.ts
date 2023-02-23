import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailsComponent } from './student-details.component';
import { StudentMainComponent } from './student-main/student-main.component';

const routes: Routes = [
  {
    path: 'student-list',
    component: StudentDetailsComponent
  },
  {
    path: 'student-details',
    component: StudentMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentDetailsRoutingModule { }
