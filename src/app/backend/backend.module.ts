import { NgModule } from '@angular/core';

import { SharedModule } from '@appShared/shared.module';
import { BackendRoutingModule } from '@appBackend/backend-routing.module';

import { AuthGuard } from '@appBackend/auth/auth.guard';
import { BackendComponent } from '@appBackend/backend.component';

@NgModule({
	imports: [
    SharedModule,
    BackendRoutingModule
  ],
	declarations: [
    BackendComponent
  ],
	providers: [AuthGuard]
	})
export class BackendModule {}
