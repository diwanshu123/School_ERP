import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionComponent } from './admission.component';
import { CategoryComponent } from './category/category.component';
import { MultipleImportComponent } from './multiple-import/multiple-import.component';

const routes: Routes = [
  {
    path: 'create',
    component: AdmissionComponent
  },
  {
    path: 'category',
    component: CategoryComponent,
  },
  {
    path: 'multiple-import',
    component: MultipleImportComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionRoutingModule { }
