import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';

import { SharedModule } from '@appShared/shared.module';
import { DashboardRoutingModule } from '@appBackend/dashboard/dashboard-routing.module';

import { AvailabilityComponent } from '@appBackend/dashboard/availability/availability.component';
import { DashboardComponent } from '@appBackend/dashboard/dashboard.component';
import { HomeComponent } from '@appBackend/dashboard/home/home.component';
import { AccountComponent } from '@appBackend/dashboard/account/account.component';
import { ShelterDetailsComponent } from '@appBackend/dashboard/shelter-details/shelter-details.component';
import { SettingsComponent } from '@appBackend/dashboard/settings/settings.component';

@NgModule({
    imports: [
        SharedModule,
        DashboardRoutingModule,
        LayoutModule
    ],
    declarations: [
        AvailabilityComponent,
        DashboardComponent,
        HomeComponent,
        AccountComponent,
        ShelterDetailsComponent,
        SettingsComponent
    ],
    exports: [
        AccountComponent,
        ShelterDetailsComponent,
    ]
})
export class DashboardModule { }
