import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeworkRoutingModule } from './homework-routing.module';
import { HomeworkListComponent } from './homework-list/homework-list.component';
import { EvalReportComponent } from './eval-report/eval-report.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeworkAddComponent } from './homework-add/homework-add.component';
import { QuillModule } from 'ngx-quill';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import { MatNativeDateModule } from '@angular/material/core';
import { HomeworkEditComponent } from './homework-edit/homework-edit.component';
@NgModule({
  declarations: [
    HomeworkListComponent,
    EvalReportComponent,
    HomeworkAddComponent,
    HomeworkEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    QuillModule,    
    HomeworkRoutingModule
  ]
})
export class HomeworkModule { }
