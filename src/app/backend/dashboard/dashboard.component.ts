import {
	Component, ViewChild, AfterViewInit, OnInit
} from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd, Event } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog, MatDialogRef } from '@angular/material';

import { MenuService } from '@appCore/services/menu.service';
import { DetailsDialogComponent } from './details-dialog/details-dialog.component';

@Component({
	selector: 'sa-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
	})
export class DashboardComponent implements OnInit, AfterViewInit {
	@ViewChild('drawer')
  sideNav: MatSidenav;
  componentName: string;
  dialogRef: MatDialogRef<any>;

	constructor(
    private router: Router,
		private location: Location,
		private dialog: MatDialog,
		private menuService: MenuService
	) {
		this.showDialog();
	}

	ngOnInit() {
    const pathsMatch: boolean = this.location.isCurrentPathEqualTo('/backend/dashboard/shelter-details');
    if (pathsMatch) {
      this.dialogRef.close();
    } else {
      this.showDialog();
    }
  }

	ngAfterViewInit() {
		/*
    TODO:
    - rename menuService to sideNavService
    - add a type to the service value
    */
		this.menuService.menuValue$.subscribe((value) => {
			this.handleSideNav(value);
		});
	}

	handleSideNav(sideNavValue: boolean) {
		if (this.sideNav) {
			sideNavValue ? this.sideNav.open() : this.sideNav.close();
		}
	}

	private showDialog() {
		this.dialogRef = this.dialog.open(DetailsDialogComponent, {
			closeOnNavigation: false,
			disableClose: true,
			hasBackdrop: true
		});
	}
}
