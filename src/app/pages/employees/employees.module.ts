import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpDeptComponent } from './emp-dept/emp-dept.component';
import { EmpDesgComponent } from './emp-desg/emp-desg.component';
import { EmpAddComponent } from './emp-add/emp-add.component';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxFileDropModule } from 'ngx-file-drop';


@NgModule({
  declarations: [
    EmpListComponent,
    EmpDeptComponent,
    EmpDesgComponent,
    EmpAddComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    MatTabsModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    NgxFileDropModule,
    ReactiveFormsModule
  ]
})
export class EmployeesModule { }
