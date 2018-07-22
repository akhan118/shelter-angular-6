import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvailabilityComponent } from '@appBackend/dashboard/availability/availability.component';
import { DashboardComponent } from '@appBackend/dashboard/dashboard.component';
import { HomeComponent } from '@appBackend/dashboard/home/home.component';
import { ProfileComponent } from '@appBackend/dashboard/profile/profile.component';
import { ShelterDetailsComponent } from '@appBackend/dashboard/shelter-details/shelter-details.component';
import { SettingsComponent } from '@appBackend/dashboard/settings/settings.component';

const homeRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'availability', component: AvailabilityComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'shelter-details', component: ShelterDetailsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
