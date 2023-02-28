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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
