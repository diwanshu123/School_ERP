import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvalReportComponent } from './eval-report/eval-report.component';
import { HomeworkAddComponent } from './homework-add/homework-add.component';
import { HomeworkListComponent } from './homework-list/homework-list.component';
import { HomeworkEditComponent } from './homework-edit/homework-edit.component';
const routes: Routes = [
  {
    path: 'list',
    component: HomeworkListComponent
  },
  {
    path: 'list/add',
    component: HomeworkAddComponent
  },
  {
    path: 'list/edit/:id',
    component: HomeworkEditComponent
  },
  {
    path: 'report',
    component: EvalReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeworkRoutingModule { }
