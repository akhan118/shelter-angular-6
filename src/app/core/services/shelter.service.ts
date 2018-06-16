import { Injectable, } from '@angular/core';
import {
	HttpParams,
	HttpHeaders,
	HttpClient,
	HttpErrorResponse,
} from '@angular/common/http';
import { UserDetailsService, } from '@appCore/services/user-details.service';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

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

@Injectable()
export class ShelterService {
	private baseUrl: string = 'http://www.alphard.us/v1/api';

	constructor(
		private http: HttpClient,
		private userDetails: UserDetailsService
	) {}

	getShelter() {
		return this.http.get('./shelter');
	}

	getShelters(shelterType: number): Observable<Shelter[]> {
		const headers = new HttpHeaders().set(
			'Authorization',
			`Bearer${this.userDetails.accessToken}`
		);
		const params = new HttpParams().set('sheltertype', shelterType.toString());
		return this.http
			.get<Shelter[]>(`${this.baseUrl}/getrequestedinfov2`, { headers, params })
			.pipe(catchError((err) => this.handleHttpError(err)));
	}

	getShelterAvailability() {
		return this.http.get('./availability');
	}

	signupShelters(param) {
		// let shelterUrl: string= this.baseUrl + '/'
		// return this.http.get(shelterUrl);
		const params = new HttpParams()
			.set('name', param.shelter_name)
			.set('address', param.shelter_address)
			.set('city', param.shelter_address_city)
			.set('state', param.shelter_address_state)
			.set('phone', param.shelter_phone);

		return this.http.post(this.baseUrl + '/signupshelter', 0, { headers: new HttpHeaders().set(
			'Authorization',
			'Bearer ' + this.userDetails.accessToken
		),
		params: params, });
	}

	private handleHttpError(error: HttpErrorResponse) {
		return throwError(error);
	}
}
