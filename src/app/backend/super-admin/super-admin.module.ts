import { NgModule } from '@angular/core';

import { SharedModule } from '@appShared/shared.module';
import { SuperAdminRoutingModule } from './super-admin-routing.module';

import { SuperAdminComponent } from './super-admin.component';
import { ShelterStatusComponent } from './shelter-status/shelter-status.component';

@NgModule({
  imports: [
    SharedModule,
    SuperAdminRoutingModule
  ],
  declarations: [
    SuperAdminComponent,
    ShelterStatusComponent
  ],
  exports: [
    ShelterStatusComponent
  ]
})
export class SuperAdminModule { }
