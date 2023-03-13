import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalaryTempleteComponent } from './salary-templete/salary-templete.component';

const routes: Routes = [
  {
    path: 'salary-templete',
    component: SalaryTempleteComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HumanRessourceRoutingModule { }
