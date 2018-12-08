import { Injectable } from '@angular/core';
import {
	HttpParams,
	HttpHeaders,
	HttpClient,
	HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

import { Shelter } from '../../models/Shelter';

@Injectable()
export class ShelterService {
	private baseUrl: string = 'http://www.alphard.us/v1/api';

	constructor(private http: HttpClient) {}

	// Get a list of all shelters
	getShelters(shelterType: number): Observable<Shelter[]> {
		const headers = new HttpHeaders().set(
			'Authorization',
			`Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
		);
		const params = new HttpParams().set('sheltertype', shelterType.toString());
		return this.http.get<Shelter[]>(`${this.baseUrl}/getrequestedinfov2`, { headers, params });
  	}

  	// Get a list of all shelters
	getSheltersWithStatus(): Observable<Shelter & {shelter_approved: string}[]> {
		const headers = new HttpHeaders().set(
			'Authorization',
			`Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
		);
		return this.http.get<Shelter & {shelter_approved: string}[]>(`${this.baseUrl}/getallsheltersneedactivation`, { headers });
  	}

	getShelterAvailability(id: number | string) {
		const params = new HttpParams().set('id', id.toLocaleString());
		return this.http.get<any>(`${this.baseUrl}/availability`, {});
	}

	updateShelter(shelterDetails: object) {
		const headers = new HttpHeaders().set(
			'Authorization',
			`Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
		);
		const params = new HttpParams()
			.set('shelter_id', shelterDetails['shelter_id'])
			.set('shelter_address', shelterDetails['shelter_address'])
			.set('shelter_address_city', shelterDetails['shelter_address_city'])
			.set('shelter_address_zip', shelterDetails['shelter_address_zip'])
			.set('shelter_address_state', shelterDetails['shelter_address_state'])
			.set('shelter_county', shelterDetails['shelter_address_county'])
			.set('shelter_phone', shelterDetails['shelter_phone'])
			.set('shelter_EIN', shelterDetails['shelter_EIN'])
			.set('shelter_email', shelterDetails['shelter_email'])
			.set('username', shelterDetails['username']);
		return this.http.get<Shelter[]>(`${this.baseUrl}/shelterconfig`, {
	          headers,
	          params
	    	});
  	}

  updateShelterStatus(statusId: string, shelterId: string) {
    const headers = new HttpHeaders().set(
			'Authorization',
			`Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
    );

    const params = new HttpParams()
      .set('shelter_approved', statusId.toLocaleString())
      .set('shelter_id', shelterId.toLocaleString());

    return this.http.get<Shelter[]>(`${this.baseUrl}/updateshelterapprovalupdate`, {
      headers,
      params
    });
  }

	signup(data: any) {
		const signupUrl: string = `${this.baseUrl}/signupshelter`;
		let params = new HttpParams();
		params = params.append('username', data.username);
		params = params.append('password', data.password);
		params = params.append('email', data.email);
		params = params.append('shelter_name', data.shelter_name);
		return this.http.get(signupUrl, { params });
	}
}
