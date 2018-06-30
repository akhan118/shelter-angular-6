import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SheltersComponent } from '@appFrontend/shelters/shelters.component';
import { HomeComponent } from '@appFrontend/home/home.component';

const userRoutes: Routes = [
  {
    path: '', children: [
      { path: '', component: HomeComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }
