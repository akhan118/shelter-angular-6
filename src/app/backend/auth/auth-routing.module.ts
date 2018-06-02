import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from '@appBackend/auth/auth.component';
import { SignupComponent } from '@appBackend/auth/signup/signup.component';
import { LoginComponent } from '@appBackend/auth/login/login.component';

const authRoutes: Routes = [
  {
    path: '', component: AuthComponent, children: [
      { path: 'signup', component: SignupComponent },
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'signup', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
