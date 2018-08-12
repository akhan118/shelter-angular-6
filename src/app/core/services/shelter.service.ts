import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { UserDetailsService } from '@appCore/services/user-details.service';
import { Observable } from 'rxjs';

export class Shelter extends Object {
  id: number;
  name: string;
  EIN: number;
  address: {
    street: string;
    zip: number;
  }
  phoneNumber: number;
  personType: [{
    id: number,
    name: 'WOMAN' | 'MEN' | 'YOUTH' | 'FAMILY' | 'ALL';
  }]
}

@Injectable()
export class ShelterService {
  private baseUrl: string = 'http://www.alphard.us/v1/api';

  constructor(private http: HttpClient, private userDetails: UserDetailsService) { }

  getShelter() {
    return this.http.get('./shelter');
  }

  getShelters(shelterType: number): Observable<Shelter[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer${this.userDetails.accessToken}`);
    const params = new HttpParams().set('shelterType', shelterType.toString());
    return this.http.get<Shelter[]>(`${this.baseUrl}/getrequestedinfov2`, { headers, params });
  }

  getShelterAvailability() {
    return this.http.get('./availability');
  }

  signup(param) {
    console.log(param)
    const params = new HttpParams()
      .set('name', param.shelter_name)
      .set('address', param.shelter_address)
      .set('city', param.shelter_address_city)
      .set('state', param.shelter_address_state)
      .set('phone', param.shelter_phone);

    // return this.http.post(this.baseUrl + '/signupshelter', 0, {
    //   headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.userDetails.accessToken),
    //   params: params,
    // });
  }

  


}
