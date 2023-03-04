import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarksRoutingModule { }
