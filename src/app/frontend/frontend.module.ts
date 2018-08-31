import { NgModule } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

import { SharedModule } from '@appShared/shared.module';
import { FrontendRoutingModule } from '@appFrontend/frontend-routing.module';
import { HomeComponent } from '@appFrontend/home/home.component';
import { ShelterItemComponent } from '@appFrontend/shelter-item/shelter-item.component';
import { SheltersComponent } from '@appFrontend/shelters/shelters.component';
import { FormsModule } from '@angular/forms';
import { FiltersComponent } from '@appFrontend/filters/filters.component';

@NgModule({
	imports: [
	MatBottomSheetModule,
	SharedModule,
	FrontendRoutingModule,
	FormsModule
	],
	exports: [ShelterItemComponent, FiltersComponent],
	declarations: [
	ShelterItemComponent,
	HomeComponent,
	SheltersComponent,
	FiltersComponent
	],
	entryComponents: [FiltersComponent]
	})
export class FrontendModule {}
