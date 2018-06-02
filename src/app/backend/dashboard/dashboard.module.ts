import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';

import { SharedModule } from '@appShared/shared.module';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';

import { HomeComponent } from '../dashboard/home/home.component';
import { AvailabilityComponent } from '../dashboard/availability/availability.component';
import { SettingsComponent } from '../dashboard/settings/settings.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminSideNavComponent } from './admin-sidenav/admin-sidenav.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule,
    LayoutModule,
  ],
  declarations: [
    HomeComponent,
    AvailabilityComponent,
    DashboardComponent,
    SettingsComponent,
    ProfileComponent,
    AdminSideNavComponent,
    AdminHeaderComponent,
    AdminDashboardComponent
  ]
})
export class DashboardModule {}
