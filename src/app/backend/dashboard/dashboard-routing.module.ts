import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '@appBackend/dashboard/dashboard.component';
import { HomeComponent } from '@appBackend/dashboard/home/home.component';
import { AccountComponent } from '@appBackend/dashboard/account/account.component';
import { ShelterDetailsComponent } from '@appBackend/dashboard/shelter-details/shelter-details.component';
import { SettingsComponent } from '@appBackend/dashboard/settings/settings.component';

const homeRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'account', component: AccountComponent },
      { path: 'shelter-details', component: ShelterDetailsComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
