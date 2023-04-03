import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarksRoutingModule } from './marks-routing.module';
import { MarkEntryComponent } from './mark-entry/mark-entry.component';
import { GradeRangeComponent } from './grade-range/grade-range.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { ExamTermComponent } from './exam-term/exam-term.component';
import { DisturbutionComponent } from './disturbution/disturbution.component';
import { ExamSetupComponent } from './exam-setup/exam-setup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExamSetupEditComponent } from './exam-setup/exam-setup-edit/exam-setup-edit.component';




@NgModule({
  declarations: [
    MarkEntryComponent,
    GradeRangeComponent,
    ExamTermComponent,
    DisturbutionComponent,
    ExamSetupComponent,
    ExamSetupEditComponent
  ],
  imports: [
    CommonModule,
    MarksRoutingModule,
    MatTabsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
   
    
 
  ]
})
export class MarksModule { }
