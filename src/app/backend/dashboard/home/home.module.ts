import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { SharedModule } from '@appShared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    AdminDashboardComponent
  ]
})
export class HomeModule { }
