import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UrlErrorComponent } from './404/url-error.component';

const appRoutes: Routes = [
  {
    path: 'frontend',
    loadChildren: '@appFrontend/frontend.module#FrontendModule'
  },
  { path: 'backend', loadChildren: '@appBackend/backend.module#BackendModule' },
  { path: '404', component: UrlErrorComponent },
  { path: '', redirectTo: 'frontend', pathMatch: 'full' },
  { path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
