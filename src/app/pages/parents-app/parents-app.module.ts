import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentsAppRoutingModule } from './parents-app-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { GuardianAppComponent } from './guardian-app/guardian-app.component';

// import { ParentsAppRoutingModule } from './parents-app-routing.module';


@NgModule({
  declarations: [
    GuardianAppComponent
 
  ],
  imports: [
    CommonModule,
    ParentsAppRoutingModule,
    MatTabsModule,
    SharedModule,
    FormsModule,
  ]
})
export class ParentsAppModule { }
