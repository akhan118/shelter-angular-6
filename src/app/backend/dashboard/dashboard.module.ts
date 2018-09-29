import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';

import { SharedModule } from '@appShared/shared.module';
import { DashboardRoutingModule } from '@appBackend/dashboard/dashboard-routing.module';

import { AdminSideNavComponent } from '@appBackend/dashboard/admin-sidenav/admin-sidenav.component';
import { AdminHeaderComponent } from '@appBackend/dashboard/admin-header/admin-header.component';
import { AdminDashboardComponent } from '@appBackend/dashboard/admin-dashboard/admin-dashboard.component';
import { AvailabilityComponent } from '@appBackend/dashboard/availability/availability.component';
import { DashboardComponent } from '@appBackend/dashboard/dashboard.component';
import { HomeComponent } from '@appBackend/dashboard/home/home.component';
import { ProfileComponent } from '@appBackend/dashboard/profile/profile.component';
import { ShelterDetailsComponent } from '@appBackend/dashboard/shelter-details/shelter-details.component';
import { SettingsComponent } from '@appBackend/dashboard/settings/settings.component';

@NgModule({
	imports: [SharedModule, DashboardRoutingModule, LayoutModule],
	declarations: [
    AdminSideNavComponent,
    AdminHeaderComponent,
    AdminDashboardComponent,
    AvailabilityComponent,
    DashboardComponent,
    HomeComponent,
    ProfileComponent,
    ShelterDetailsComponent,
    SettingsComponent
	]
	})
export class DashboardModule {}
