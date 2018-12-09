import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@appShared/material.module';
import { AdminHeaderComponent } from '@appBackend/admin-header/admin-header.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { LoadingIconComponent } from '@appShared/loading-icon/loading-icon.component';
import { FormatPhonePipe } from './phone.pipe';

@NgModule({
  declarations: [
    FormatPhonePipe,
    AdminHeaderComponent,
    NavbarComponent,
    LoadingIconComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MaterialModule,
    NavbarComponent,
    AdminHeaderComponent,
    LoadingIconComponent,
    FormatPhonePipe
  ]
})
export class SharedModule { }
