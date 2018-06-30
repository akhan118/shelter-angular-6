import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';

import { Shelter } from 'app/models/Shelter';
import { UserDetailsService } from '@appCore/services/user-details.service';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable()
export class ShelterService {
  private baseUrl: string = 'http://www.alphard.us/v1/api';

  constructor(private http: HttpClient, private userDetails: UserDetailsService) { }

  getShelter() {
    return this.http.get('./shelter');
  }

  getShelters(shelterType: number): Observable<Shelter[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer${this.userDetails.accessToken}`);
    const params = new HttpParams().set('sheltertype', shelterType.toString());
    return this.http.get<Shelter[]>(`${this.baseUrl}/getrequestedinfov2`, { headers, params });
  }

  getShelterAvailability() {
    return this.http.get('./availability');
  }

  signupShelters(shelterData) {
    // let shelterUrl: string= this.baseUrl + '/'
    // return this.http.get(shelterUrl);
    const params = new HttpParams()
      .set('shelter_user', shelterData.name)
      .set('shelter_address_street', shelterData.address)
      .set('shelter_address_city', shelterData.city)
      .set('shelter_address_state', shelterData.state)
      .set('shelter_zip', shelterData.zip)
      .set('shelter_county', shelterData.county)
      .set('shelter_phone', shelterData.phone);

    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.userDetails.accessToken);

    return this.http.post(this.baseUrl + '/signupshelter', { headers, params });
  }




}
