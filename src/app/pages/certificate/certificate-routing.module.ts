import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertEmpComponent } from './cert-emp/cert-emp.component';
import { CertStudComponent } from './cert-stud/cert-stud.component';
import { CertTempComponent } from './cert-temp/cert-temp.component';

const routes: Routes = [
  {
    path: 'template',
    component: CertTempComponent
  },
  {
    path: 'student',
    component: CertStudComponent
  },
  {
    path: 'employee',
    component: CertEmpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificateRoutingModule { }
