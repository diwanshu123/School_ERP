import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisturbutionComponent } from './disturbution/disturbution.component';
import { ExamSetupEditComponent } from './exam-setup/exam-setup-edit/exam-setup-edit.component';
import { ExamSetupComponent } from './exam-setup/exam-setup.component';
import { ExamTermComponent } from './exam-term/exam-term.component';
import { GradeEditComponent } from './grade-range/grade-edit/grade-edit.component';
import { GradeRangeComponent } from './grade-range/grade-range.component';
import { MarkEntryComponent } from './mark-entry/mark-entry.component';

const routes: Routes = [
  {
    path: 'entry',
    component: MarkEntryComponent
  },
  {
    path: 'grade',
    component: GradeRangeComponent
  },
  {
    path: 'exam-term',
    component: ExamTermComponent
  },
  {
    path: 'disturbution',
    component: DisturbutionComponent
  },
  {
    path: 'exam-setup',
    component: ExamSetupComponent
  },
  {
    path: 'exam-setup/:id',
    component: ExamSetupEditComponent
  },
  {
    path: 'grade-edit/:id',
    component: GradeEditComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarksRoutingModule { }
