import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeworkRoutingModule } from './homework-routing.module';
import { HomeworkListComponent } from './homework-list/homework-list.component';
import { EvalReportComponent } from './eval-report/eval-report.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeworkAddComponent } from './homework-add/homework-add.component';
import { QuillModule } from 'ngx-quill';


@NgModule({
  declarations: [
    HomeworkListComponent,
    EvalReportComponent,
    HomeworkAddComponent
  ],
  imports: [
    CommonModule,
    HomeworkRoutingModule,
    QuillModule,
    SharedModule
  ]
})
export class HomeworkModule { }
