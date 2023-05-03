import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailsComponent } from './student-details.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailAllComponent } from './student-detail-all/student-detail-all.component';
const routes: Routes = [
  {
    path: '',
    component: StudentDetailsComponent
  },
  {
    path: 'student-list',
    component: StudentListComponent
  },
  {
    path: 'student-list/:id',
    component: StudentInfoComponent
  },
  {
    path: 'student-view/:id',
    component: StudentDetailAllComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentDetailsRoutingModule { }
