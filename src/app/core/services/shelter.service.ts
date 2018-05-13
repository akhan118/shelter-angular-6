import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Http, Headers, RequestOptions, Response ,  } from '@angular/http';
import { HttpParams , HttpHeaders  , HttpClient } from '@angular/common/http';
import { UserDetailsService } from '@appCore/services/user-details.service';

@Injectable()
export class ShelterService {
  // private baseUrl: string = 'http://www.alphard.us/v1/api/getallshelters';
  private baseUrl: string = 'http://www.alphard.us/v1/api';

  constructor(private http: HttpClient, private userDetails: UserDetailsService) { }

  getShelter() {
    return this.http.get('./shelter');
  }

  getAllShelters() {
    // let shelterUrl: string= this.baseUrl + '/'
    // return this.http.get(shelterUrl);
      return this.http.post( this.baseUrl + '/getallshelters', 0 , {
          headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.userDetails.accessToken),
        });
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
  .set('phone',  param.shelter_phone);

      return this.http.post( this.baseUrl + '/signupshelter', 0 , {
          headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.userDetails.accessToken),
          params: params,
        });
  }




}
