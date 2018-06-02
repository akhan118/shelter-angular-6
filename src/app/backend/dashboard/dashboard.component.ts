import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

import { MenuService } from '@appCore/services/menu.service';

@Component({
  selector: 'sa-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('drawer') sideNav: MatSidenav;

  constructor(private menuService: MenuService, private router: Router) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.menuService.menuValue$.subscribe(value => {
      this.handleSideNav(value);
    });
  }

  handleSideNav(sideNavValue: boolean) {
    if (this.sideNav) {
      sideNavValue ? this.sideNav.open() : this.sideNav.close();
    }
  }

}
