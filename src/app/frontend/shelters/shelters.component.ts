import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';

import { ShelterService } from '@appCore/services/shelter.service';
import { Shelter } from '../../models/Shelter';
import { ShelterType } from '../../models/ShelterType';
import { ShelterTypeService } from '@appCore/services/shelter-type.service';
import { FiltersComponent } from '@appFrontend/filters/filters.component';

@Component({
	selector: 'sa-shelters',
	templateUrl: 'shelters.component.html',
	styleUrls: ['./shelters.component.css'],
})
export class SheltersComponent implements OnInit {
	errorMsg: string;
	filterValue: string = '';
	isLoading: boolean = false;
	typeName: string = '';
	shelters: Shelter[] = [];

	constructor(
		private bottomSheet: MatBottomSheet,
		private shelterService: ShelterService,
		private shelterTypeService: ShelterTypeService
	) { }

	ngOnInit() {
		this.getShelterType();
	}

	getShelterType() {
		this.shelterTypeService.value$.subscribe((value: string) => {
			const typeId: number = ShelterType[value.toLocaleUpperCase()];

			// Call the getShelter function passing in the typeId value
			this.getShelters(typeId);
		});
	}

	getShelters(shelterTypeId: number = 5) {
		this.isLoading = true;
		this.shelterService.getShelters(shelterTypeId)
			.subscribe((shelters: Shelter[]) => {
				let allShelters: Shelter[] = shelters;
				if (shelterTypeId !== 5) {
					setTimeout(() => {
						this.shelters = allShelters.filter(shelter => shelter.shelter_type.id === shelterTypeId);
						this.isLoading = false;
					}, 300)
					return;
				}
				this.shelters = allShelters;
				this.isLoading = false;
			}, (error) => {
				console.error('Error getting shelters.', error);
				this.errorMsg = 'There was an error getting shelters. Refresh the page and try again.';
				this.isLoading = false;
			});
	}

	showFilters() {
		this.bottomSheet.open(FiltersComponent);
	}
}
