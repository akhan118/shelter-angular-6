import { NgModule } from '@angular/core';

import { SharedModule } from '@appShared/shared.module';
import { BackendRoutingModule } from '@appBackend/backend-routing.module';

import { AuthGuard } from '@appBackend/auth/auth.guard';
import { BackendComponent } from '@appBackend/backend.component';
import { DetailsDialogComponent } from '@appBackend/dashboard/details-dialog/details-dialog.component';

@NgModule({
	imports: [SharedModule, BackendRoutingModule],
	declarations: [BackendComponent, DetailsDialogComponent],
	providers: [AuthGuard]
	})
export class BackendModule {}
