import { NgModule } from '@angular/core';
import { SuperAdminComponent } from './super-admin.component';
import { SharedModule } from '@appShared/shared.module';
import { SuperAdminRoutingModule } from './super-admin-routing.module';

@NgModule({
  imports: [
    SharedModule,
    SuperAdminRoutingModule
  ],
  declarations: [SuperAdminComponent]
})
export class SuperAdminModule { }
