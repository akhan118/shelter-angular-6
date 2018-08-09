import { NgModule } from '@angular/core';

import { SharedModule } from '@appShared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { signUpShelterService } from '@appCore/services/signupshelter.service';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

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
 ,
  providers: [
    signUpShelterService,
  ]
})
export class AuthModule { }
