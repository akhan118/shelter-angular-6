import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';

import { SharedModule } from '@appShared/shared.module';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';

import { AvailabilityComponent } from '../dashboard/availability/availability.component';
import { SettingsComponent } from '../dashboard/settings/settings.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeModule } from './home/home.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';


@NgModule({
  imports: [
    SharedModule,
    HomeModule,
    DashboardRoutingModule,
    LayoutModule
  ],
  declarations: [
    DashboardComponent,
    AvailabilityComponent,
    SettingsComponent,
    ProfileComponent,
    SideNavComponent,
    AdminHeaderComponent
  ]
})
export class DashboardModule { }
