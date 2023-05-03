


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionRoutingModule } from './admission-routing.module';
import { CategoryComponent } from './category/category.component';
import { MultipleImportComponent } from './multiple-import/multiple-import.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdmissionComponent } from './admission.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { NgxFileDropModule } from 'ngx-file-drop';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CreateStudentComponent } from './create-student/create-student.component';





@NgModule({
  declarations: [
    AdmissionComponent,
    CategoryComponent,
    MultipleImportComponent,
    CreateStudentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,    
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,
    NgxFileDropModule,
    MatCheckboxModule,
    AdmissionRoutingModule,
    SharedModule,

  ]
})
export class AdmissionModule { }
