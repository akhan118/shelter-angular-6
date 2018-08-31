import {
	NgModule,
	ModuleWithProviders,
	Optional,
	SkipSelf
} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FilterService } from '@appCore/services/filter.service';
import { LoginService } from '@appCore/services/login.service';
import { MenuService } from '@appCore/services/menu.service';
import { ShelterService } from '@appCore/services/shelter.service';
import { UserDetailsService } from '@appCore/services/user-details.service';

@NgModule({
	imports: [HttpClientModule],
	providers: [
	FilterService,
	LoginService,
	MenuService,
	ShelterService,
	UserDetailsService
	]
	})
export class CoreModule {
	constructor(
	@Optional()
	@SkipSelf()
		parentModule: CoreModule
	) {
		if (parentModule) {
			throw new Error(
				'CoreModule is already loaded. Import it in the AppModule only'
			);
		}
	}

	static forRoot(): ModuleWithProviders {
		return { ngModule: CoreModule };
	}
}
