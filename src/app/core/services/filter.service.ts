import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Shelter } from '../../models/Shelter';
import { ShelterService } from './shelter.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
	})
export class FilterService {
	private error = new Subject<HttpErrorResponse>();
	private allShelters: Shelter[] = [];
	private shelters = new Subject<Shelter[]>();
	error$: Observable<HttpErrorResponse> = this.error.asObservable();
	shelters$: Observable<Shelter[]> = this.shelters.asObservable();

	constructor(private shelterService: ShelterService) {}

	getShelters() {
		this.shelterService.getShelters().subscribe(
			(shelters: Shelter[]) => {
				this.allShelters = shelters;
				setTimeout(() => {
					this.shelters.next(this.allShelters);
				}, 300);
			},
			(error: HttpErrorResponse) => {
				console.error('Error getting shelters.', error);
				this.error.next(error);
			}
		);
	}

	shelterType(shelter: Shelter, shelterTypeId: number) {
		return shelter.shelter_type.id === shelterTypeId;
	}

	updatedTime(shelter: Shelter, time: number) {
		return shelter.last_updated === time;
	}

	applyFilters(filtersObj: object) {
		const filteredShelters: Shelter[] = [ ...this.allShelters ].filter(
			(shelter: Shelter) => this.shelterType(shelter, filtersObj['typeId'])
		);
		// .filter((shelter: Shelter) =>
		// 	this.updatedTime(shelter, filtersObj['lastUpdated'])
		// );
		this.shelters.next(filteredShelters);
	}
}
