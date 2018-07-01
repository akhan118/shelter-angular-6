import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { UserDetailsService } from '@appCore/services/user-details.service';

@Injectable()
export class LoginService {
  private baseUrl: string = 'http://alphard.us/v1/api';

  constructor(private http: HttpClient, private userDetails: UserDetailsService) { }

  login(username: string, password: string) {
    const loginUrl: string = `${this.baseUrl}/login`;
    let params = new HttpParams();
    params = params.append('username', username);
    params = params.append('password', password);
    return this.http.get<any>(loginUrl, { params })
      .pipe(
        catchError((error) => this.handleHttpError(error))
      );
  }

  signup(shelterData): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer${this.userDetails.accessToken}`);

    const params = new HttpParams()
      .set('shelter_user', shelterData.name)
      .set('shelter_address_street', shelterData.address)
      .set('shelter_address_city', shelterData.city)
      .set('shelter_address_state', shelterData.state)
      .set('shelter_zip', shelterData.zip)
      .set('shelter_county', shelterData.county)
      .set('shelter_phone', shelterData.phone);

    return this.http.post(this.baseUrl + '/signupshelter', { headers, params })
      .pipe(
        catchError((error) => this.handleHttpError(error))
      );;
  }

  isLoggedIn(): boolean {
    let loggedInStatus: boolean = false;
    if (this.userDetails.accessToken) {
      loggedInStatus = true;
    }
    return loggedInStatus;
  }

  private handleHttpError(error: HttpErrorResponse): Observable<HttpErrorResponse> {
    return throwError(error);
  }
}

