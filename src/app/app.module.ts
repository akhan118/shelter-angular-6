import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@appCore/core.module';
import { BackendModule } from '@appBackend/backend.module';
import { FrontendModule } from '@appFrontend/frontend.module';

import { AppComponent } from './app.component';
import { UrlErrorComponent } from './404/url-error.component';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UrlErrorComponent
  ],
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    AppRoutingModule,
    BackendModule,
    FrontendModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
