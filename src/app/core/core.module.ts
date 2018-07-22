import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { LoginService } from '@appCore/services/login.service';
import { MenuService } from '@appCore/services/menu.service';
import { ShelterService } from '@appCore/services/shelter.service';
import { ShelterType } from '../models/ShelterType';
import { ShelterTypeService } from '@appCore/services/shelter-type.service';
import { UserDetailsService } from '@appCore/services/user-details.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    LoginService,
    MenuService,
    ShelterService,
    ShelterTypeService,
    UserDetailsService
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule
    };
  }
}
