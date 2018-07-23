import { NgModule } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

import { SharedModule } from '@appShared/shared.module';
import { FrontendRoutingModule } from '@appFrontend/frontend-routing.module';
import { HomeComponent } from '@appFrontend/home/home.component';
import { ShelterItemComponent } from '@appFrontend/shelter-item/shelter-item.component';
import { SheltersComponent } from '@appFrontend/shelters/shelters.component';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { FiltersComponent } from '@appFrontend/filters/filters.component';

=======

import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
>>>>>>> upstream/master


@NgModule({
  imports: [
    MatBottomSheetModule,
    SharedModule,
    FrontendRoutingModule,
    FormsModule
  ],
  exports: [
    ShelterItemComponent,
    FiltersComponent
  ],
  declarations: [
    ShelterItemComponent,
    HomeComponent,
    SheltersComponent,
<<<<<<< HEAD
    FiltersComponent
  ],
  entryComponents: [
    FiltersComponent
=======
    
>>>>>>> upstream/master
  ]
})
export class FrontendModule { }
