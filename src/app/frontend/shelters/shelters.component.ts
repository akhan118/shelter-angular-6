import {Component, OnInit} from '@angular/core';

import { ShelterService } from '@appCore/services/shelter.service';
import { ShelterType } from 'app/models/ShelterType';
import { ShelterTypeService } from '@appCore/services/shelter-type.service';

export class Shelter extends Object {
	id: number;
	name: string;
	EIN: number;
	address: {
		street: string;
		zip: number;
	};
	phoneNumber: number;
	personType: [
		{
			id: number;
			name: 'WOMAN' | 'MEN' | 'YOUTH' | 'FAMILY' | 'ALL';
		}
	];
}

@Component({
	selector: 'sa-shelters',
	templateUrl: 'shelters.component.html',
	styleUrls: ['./shelters.component.css'],
	})
export class SheltersComponent implements OnInit {
	errorMsg: string = '';
	filterValue: string = '';
	isLoading: boolean = false;
	typeName: string = '';
	shelters: Shelter[] = [];

	constructor(
		private shelterService: ShelterService,
		private shelterTypeService: ShelterTypeService
	) {}

	ngOnInit() {
		this.getShelterType();
	}

	getShelterType() {
		this.shelterTypeService.value$.subscribe((value) => {
			this.typeName = value;
			const typeValue: number = ShelterType[value.toLocaleUpperCase()];
			this.getShelters(typeValue);
		});
	}

	getShelters(shelterType: number = 5) {
		this.isLoading = true;
		this.shelterService.getShelters(shelterType).subscribe(
			(shelters: Shelter[]) => {
				this.isLoading = false;
				this.shelters = shelters;
			},
			(error) => {
				console.error('Error getting shelters:', error);
				this.isLoading = false;
				this.errorMsg = 'Error getting shelters. Try reloading the page.';
			}
		);
	}
}
