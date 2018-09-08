import {
	Component, ViewChild, AfterViewInit, OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog } from '@angular/material';

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

	constructor(
		private activated: ActivatedRoute,
		private dialog: MatDialog,
		private menuService: MenuService
	) {
		this.showDialog();
	}

	ngOnInit() {}

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
		this.dialog.open(DetailsDialogComponent, {
			closeOnNavigation: false,
			disableClose: true,
			hasBackdrop: true
		});
	}
}
