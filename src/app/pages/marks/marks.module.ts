import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarksRoutingModule } from './marks-routing.module';
import { MarkEntryComponent } from './mark-entry/mark-entry.component';
import { GradeRangeComponent } from './grade-range/grade-range.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    MarkEntryComponent,
    GradeRangeComponent
  ],
  imports: [
    CommonModule,
    MarksRoutingModule,
    MatTabsModule,
    SharedModule
  ]
})
export class MarksModule { }
