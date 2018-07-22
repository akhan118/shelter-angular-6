import { NgModule } from '@angular/core';

import { SharedModule } from '@appShared/shared.module';
import { AuthRoutingModule } from '@appBackend/auth/auth-routing.module';

import { AuthComponent } from '@appBackend/auth/auth.component';
import { LoginComponent } from '@appBackend/auth/login/login.component';
import { SignupComponent } from '@appBackend/auth/signup/signup.component';

@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent
  ]
})
export class AuthModule { }
