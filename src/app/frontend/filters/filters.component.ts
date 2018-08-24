import { Component } from '@angular/core';

import { FilterService } from '@appCore/services/filter.service';

class ShelterType extends Object {
	id: number;
	value: 'All' | 'Men' | 'Women' | 'Youth' | 'Family';
	uiSelected: boolean;
}

@Component({
	selector: 'sa-filters',
	templateUrl: './filters.component.html',
	styleUrls: ['./filters.component.css']
	})
export class FiltersComponent {
	selectedType: ShelterType;
	shelterTypes: ShelterType[] = [
		{
			id: 5,
			value: 'All',
			uiSelected: true
		},
		{
			id: 1,
			value: 'Women',
			uiSelected: false
		},
		{
			id: 2,
			value: 'Men',
			uiSelected: false
		},
		{
			id: 3,
			value: 'Youth',
			uiSelected: false
		},
		{
			id: 4,
			value: 'Family',
			uiSelected: false
		}
	];

	timeSlots: { value: number; uiSelected: boolean }[] = [
		// 60000 milliseconds = 1 minute
		{ value: 5, uiSelected: false },
		{ value: 10, uiSelected: false },
		{ value: 15, uiSelected: false },
		{ value: 20, uiSelected: false }
	];
	filtersObj: object = { lastUpdated: null, typeId: null };

	constructor(private filterService: FilterService) {}

	setLastUpdated(timeSlot) {
		timeSlot.uiSelected = !timeSlot.uiSelected;
		this.resetLastUpdated(timeSlot);
		const timeInMs: number = timeSlot.value * 60000;
		const updatedFilters: object = { ...this.filtersObj,
			lastUpdated: timeInMs };
		this.filtersObj = updatedFilters;
	}

	setShelterType(shelterType: ShelterType) {
		shelterType.uiSelected = !shelterType.uiSelected;
		this.selectedType = shelterType;
		this.resetShelterTypes(shelterType);
		const updatedFilters: object = { ...this.filtersObj,
			typeId: shelterType.id };
		this.filtersObj = updatedFilters;
	}

	applyFilters() {
		this.filterService.applyFilters(this.filtersObj);
	}

	private resetShelterTypes(shelterType: ShelterType) {
		this.shelterTypes.forEach((type: ShelterType) => {
			if (type.value !== shelterType.value) {
				type.uiSelected = false;
			}
		});
	}

	private resetLastUpdated(timeSlot: any) {
		this.timeSlots.forEach((type: any) => {
			if (type.value !== timeSlot.value) {
				type.uiSelected = false;
			}
		});
	}
}
