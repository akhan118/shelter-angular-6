import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperAdminComponent } from '@appBackend/super-admin/super-admin.component';

const superRoutes: Routes = [
  {
    path: '',
    component: SuperAdminComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(superRoutes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }

