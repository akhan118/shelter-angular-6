import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { LoginService } from './services/login.service';
import { ShelterService } from '@appCore/services/shelter.service';
import { UserDetailsService } from './services/user-details.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    LoginService,
    ShelterService,
    UserDetailsService
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      )
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule
    }
  }
}
