


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionRoutingModule } from './admission-routing.module';
import { CategoryComponent } from './category/category.component';
import { MultipleImportComponent } from './multiple-import/multiple-import.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdmissionComponent } from './admission.component';


@NgModule({
  declarations: [
    AdmissionComponent,
    CategoryComponent,
    MultipleImportComponent
  ],
  imports: [
    CommonModule,
    AdmissionRoutingModule,
    SharedModule
  ]
})
export class AdmissionModule { }
