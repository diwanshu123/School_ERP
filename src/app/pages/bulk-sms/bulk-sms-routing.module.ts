import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailTemplateComponent } from './email-template/email-template.component';
import { SendSmsComponent } from './send-sms/send-sms.component';
import { SmsReportComponent } from './sms-report/sms-report.component';
import { SmsTemplateComponent } from './sms-template/sms-template.component';
import { StaffBirthComponent } from './staff-birth/staff-birth.component';
import { StudBirthComponent } from './stud-birth/stud-birth.component';

const routes: Routes = [
  {
    path: 'send-sms',
    component: SendSmsComponent
  },
  {
    path: 'sms-report',
    component: SmsReportComponent
  },
  {
    path: 'sms-temp',
    component: SmsTemplateComponent
  },
  {
    path: 'email-temp',
    component: EmailTemplateComponent
  },
  {
    path: 'stud-birth',
    component: StudBirthComponent
  },
  {
    path: 'staff-birth',
    component: StaffBirthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BulkSmsRoutingModule { }
