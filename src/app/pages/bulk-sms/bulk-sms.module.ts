import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BulkSmsRoutingModule } from './bulk-sms-routing.module';
import { SendSmsComponent } from './send-sms/send-sms.component';
import { SmsReportComponent } from './sms-report/sms-report.component';
import { SmsTemplateComponent } from './sms-template/sms-template.component';
import { EmailTemplateComponent } from './email-template/email-template.component';
import { StudBirthComponent } from './stud-birth/stud-birth.component';
import { StaffBirthComponent } from './staff-birth/staff-birth.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    SendSmsComponent,
    SmsReportComponent,
    SmsTemplateComponent,
    EmailTemplateComponent,
    StudBirthComponent,
    StaffBirthComponent
  ],
  imports: [
    CommonModule,
    BulkSmsRoutingModule,
    MatTabsModule,
    SharedModule
  ]
})
export class BulkSmsModule { }
