import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';
import { NavbarComponent } from 'app/navbar/navbar.component';
import { FooterComponent } from 'app/footer/footer.component';
import { SheltersFilterPipe } from './shelters-filter.pipe';
import { LoadingIconComponent } from './loading-icon/loading-icon.component';

@NgModule({
  declarations: [
    SheltersFilterPipe, 
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
    SheltersFilterPipe,
    NavbarComponent,
    FooterComponent,
    LoadingIconComponent
  ]
})
export class SharedModule {}
