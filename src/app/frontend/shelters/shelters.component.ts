import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material';

import { Shelter } from '../../models/Shelter';
import { FiltersComponent } from '@appFrontend/filters/filters.component';
import { FilterService } from '@appCore/services/filter.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
	selector: 'sa-shelters',
	templateUrl: 'shelters.component.html',
	styleUrls: ['./shelters.component.css']
	})
export class SheltersComponent implements OnInit {
	errorMsg: string = null;
	isLoading: boolean = false;
	shelters: Shelter[] = [];

	constructor(
		private bottomSheet: MatBottomSheet,
		private filterService: FilterService
	) {}

	ngOnInit() {
		this.getShelters();
	}

	getShelters() {
		this.isLoading = true;
		this.filterService.getShelters();
		this.filterService.shelters$.subscribe((shelters: Shelter[]) => {
			this.isLoading = false;
			this.shelters = shelters;
		});
		this.filterService.error$.subscribe((error: HttpErrorResponse) => {
			this.isLoading = false;
			this.errorMsg = 'Error getting shelters. Reload the page and try again.';
		});
	}

	showFilters() {
		this.bottomSheet.open(FiltersComponent);
	}
}
