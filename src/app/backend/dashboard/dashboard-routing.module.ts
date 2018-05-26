import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from '@appBackend/dashboard/home/home.component';
import { AvailabilityComponent } from '@appBackend/dashboard/availability/availability.component';
import { ProfileComponent } from '@appBackend/dashboard/profile/profile.component';
import { SettingsComponent } from '@appBackend/dashboard/settings/settings.component';

const homeRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'availability', component: AvailabilityComponent },
      { path: 'profile', component: ProfileComponent },
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
