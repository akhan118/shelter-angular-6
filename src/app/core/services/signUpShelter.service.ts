import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { UserDetailsService } from '@appCore/services/user-details.service';

@Injectable()
export class signUpShelterService {
  private baseUrl: string = 'http://alphard.us/v1/api';

  constructor(private http: HttpClient, private userDetails: UserDetailsService) { }
  signUpShelter(data: any) {
    const loginUrl: string = `${this.baseUrl}/signupshelter`;
    let params = new HttpParams();
    params = params.append('username', data.username);
    params = params.append('password', data.password);
    params = params.append('email', data.shelter_email);
    params = params.append('shelter_name', data.shelter_name);
    return this.http.get(loginUrl, { params });
  }
}
