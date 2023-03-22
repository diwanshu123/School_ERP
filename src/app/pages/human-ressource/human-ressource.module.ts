import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HumanRessourceRoutingModule } from './human-ressource-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatTabsModule} from '@angular/material/tabs';
import { SalaryTempleteComponent } from './salary-templete/salary-templete.component';
import { SalaryAssignComponent } from './salary-assign/salary-assign.component';
import { SalaryPaymentComponent } from './salary-payment/salary-payment.component';
import { AdvancedSalaryComponent } from './advanced-salary/advanced-salary.component';
import { ManageApplicationComponent } from './manage-application/manage-application.component';
import { LeaveCategoryComponent } from './leave-category/leave-category.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { LeaveManageApplicationComponent } from './leave-manage-application/leave-manage-application.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SalaryTempleteComponent,
    SalaryAssignComponent,
    SalaryPaymentComponent,
    AdvancedSalaryComponent,
    ManageApplicationComponent,
    LeaveCategoryComponent,
    LeaveApplicationComponent,
    LeaveManageApplicationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HumanRessourceRoutingModule,
    SharedModule,
    MatTabsModule
  ]
})
export class HumanRessourceModule { }
