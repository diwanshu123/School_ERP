import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionEnqComponent } from './admission-enq/admission-enq.component';
import { CallLogComponent } from './call-log/call-log.component';
import { VisitorLogComponent } from './visitor-log/visitor-log.component';

const routes: Routes = [
  {
    path: 'enquiry',
    component: AdmissionEnqComponent
  },
  {
    path: 'calllog',
    component: CallLogComponent
  },
  {
    path: 'visitorlog',
    component: VisitorLogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceptionRoutingModule { }
