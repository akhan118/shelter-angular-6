import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';

import { MenuService } from '@appCore/services/menu.service';

@Component({
  selector: 'sa-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.css']
})
export class AdminSideNavComponent {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Handset
  );
  constructor(
    private breakpointObserver: BreakpointObserver,
    private menuService: MenuService,
    private router: Router
  ) {}

  closeSidenav() {
    this.menuService.toggleMenu();
  }

  logout() {
    this.router.navigate(['/backend/login']);
  }
}
