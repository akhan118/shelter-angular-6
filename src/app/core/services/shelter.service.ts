import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Shelter } from 'app/models/Shelter';
import { UserDetailsService } from '@appCore/services/user-details.service';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class ShelterService {
	private baseUrl: string = 'http://www.alphard.us/v1/api';

	constructor(
		private http: HttpClient,
		private userDetails: UserDetailsService
	) { }

	getShelters(shelterType: number): Observable<Shelter[]> {
		const headers = new HttpHeaders().set('Authorization', `Bearer${this.userDetails.accessToken}`);
		const params = new HttpParams().set('sheltertype', shelterType.toString());
		return this.http.get<Shelter[]>(`${this.baseUrl}/getrequestedinfov2`, { headers, params });
	}

	private handleHttpError(error: HttpErrorResponse): Observable<HttpErrorResponse> {
		return throwError(error);
	}
}
