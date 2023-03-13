import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceCollectPaidComponent } from './invoice-collect-paid/invoice-collect-paid.component';

const routes: Routes = [
  {
    path: 'invoice-collect-paid',
    component: InvoiceCollectPaidComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
