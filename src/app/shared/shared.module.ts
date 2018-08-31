import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@appShared/material.module';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { LoadingIconComponent } from '@appShared/loading-icon/loading-icon.component';
import { FormatPhonePipe } from './phone.pipe';

@NgModule({
  declarations: [
    FormatPhonePipe,
    NavbarComponent,
    FooterComponent,
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
    FooterComponent,
    LoadingIconComponent,
    FormatPhonePipe
  ]
})
export class SharedModule { }
