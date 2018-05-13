import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SheltersComponent } from '@appFrontend/shelters/shelters.component';
import { HomeComponent } from '@appFrontend/home/home.component';
import { SheltersSignupComponent } from '@appFrontend/shelters-signup/shelters-signup.component';

const userRoutes: Routes = [
  {
    path: '', children: [
      { path: '', component: HomeComponent },
      { path: 'shelters', component: SheltersComponent },
      { path: 'signup', component: SheltersSignupComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }
