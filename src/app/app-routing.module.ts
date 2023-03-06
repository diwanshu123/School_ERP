import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionComponent } from './pages/admission/admission.component';

const routes: Routes = [
  {
    path: '',
    component: AdmissionComponent
  },
  {
    path: 'admission',
    loadChildren: () => import('./pages/admission/admission.module').then( m => m.AdmissionModule)
  },
  {
    path: 'student-details',
    loadChildren: () => import('./pages/student-details/student-details.module').then( m => m.StudentDetailsModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./pages/employees/employees.module').then( m => m.EmployeesModule)
  },
  {
    path: 'cert',
    loadChildren: () => import('./pages/certificate/certificate.module').then( m => m.CertificateModule)
  },
  {
    path: 'marks',
    loadChildren: () => import('./pages/marks/marks.module').then( m => m.MarksModule)
  },
  {
    path: 'homework',
    loadChildren: () => import('./pages/homework/homework.module').then( m => m.HomeworkModule)
  },
  {
    path: 'bulk',
    loadChildren: () => import('./pages/bulk-sms/bulk-sms.module').then( m => m.BulkSmsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
