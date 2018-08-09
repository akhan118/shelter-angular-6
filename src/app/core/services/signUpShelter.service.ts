import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { UserDetailsService } from '@appCore/services/user-details.service';

@Injectable()
export class signUpShelterService {
  private baseUrl: string = 'http://alphard.us/v1/api';

  constructor(private http: HttpClient, private userDetails: UserDetailsService) { }
 
  signUpShelter(data:any) {
    console.log(data)
    const loginUrl: string = `${this.baseUrl}/signupshelter`;
    let params = new HttpParams();
    params = params.append('username', data);
    // params = params.append('password', password);
    return this.http.get(loginUrl, { params });
  }

  signup(signupData: object) {
    console.log(signupData)
    const signupUrl: string = `${this.baseUrl}/signup`;
    return this.http.post(signupUrl, { signupData });
  }

  isLoggedIn() {
    let loggedInStatus: boolean = false;
    if (this.userDetails.accessToken) {
      loggedInStatus = true;
    }
    console.log('logged IN', loggedInStatus);
    return loggedInStatus;
  }
}
