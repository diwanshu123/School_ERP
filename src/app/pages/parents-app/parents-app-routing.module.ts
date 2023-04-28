import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardianAppComponent } from './guardian-app/guardian-app.component';

const routes: Routes = [
  {
    path: 'parent_app',
    component: GuardianAppComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentsAppRoutingModule { }
