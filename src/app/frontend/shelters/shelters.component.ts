import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';

import { ShelterService } from '@appCore/services/shelter.service';
import { Shelter } from 'app/models/Shelter';
import { ShelterType } from 'app/models/ShelterType';
import { ShelterTypeService } from '@appCore/services/shelter-type.service';
import { FiltersComponent } from '@appFrontend/filters/filters.component';

@Component({
	selector: 'sa-shelters',
	templateUrl: 'shelters.component.html',
	styleUrls: ['./shelters.component.css'],
})
export class SheltersComponent implements OnInit {
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
		this.shelterTypeService.value$.subscribe((value) => {
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
						this.isLoading = false;
						this.shelters = allShelters.filter(shelter => shelter.shelter_type.id === shelterTypeId);
					}, 300)
					return;
				}
				this.isLoading = false;
				this.shelters = allShelters;
			}, (error) => {
				this.isLoading = false;
				console.error('Error getting shelters:', error)
			});
	}

	showFilters() {
		this.bottomSheet.open(FiltersComponent);
	}
}
