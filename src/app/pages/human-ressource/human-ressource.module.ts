import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HumanRessourceRoutingModule } from './human-ressource-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatTabsModule} from '@angular/material/tabs';
import { SalaryTempleteComponent } from './salary-templete/salary-templete.component';


@NgModule({
  declarations: [
    SalaryTempleteComponent
  ],
  imports: [
    CommonModule,
    HumanRessourceRoutingModule,
    SharedModule,
    MatTabsModule
  ]
})
export class HumanRessourceModule { }
