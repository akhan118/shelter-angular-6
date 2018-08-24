import { Injectable } from '@angular/core';
import {
	HttpParams,
	HttpHeaders,
	HttpClient,
	HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

import { Shelter } from '../../models/Shelter';
import { UserDetailsService } from '@appCore/services/user-details.service';

@Injectable()
export class ShelterService {
	private baseUrl: string = 'http://www.alphard.us/v1/api';

	constructor(
		private http: HttpClient,
		private userDetails: UserDetailsService
	) {}

	getShelters(shelterType: number = 5): Observable<Shelter[]> {
		const headers = new HttpHeaders().set(
			'Authorization',
			`Bearer${this.userDetails.accessToken}`
		);
		const params = new HttpParams().set('sheltertype', shelterType.toString());
		//return this.http.get<Shelter[]>(`${this.baseUrl}/getrequestedinfov2`, { headers, params });
		return this.http.get<Shelter[]>('../assets/shelters.json', { headers,
			params });
	}

	private handleHttpError(
		error: HttpErrorResponse
	): Observable<HttpErrorResponse> {
		return throwError(error);
	}
}
