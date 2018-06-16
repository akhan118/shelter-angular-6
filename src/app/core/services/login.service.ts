import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
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
      catchError(err => this.handleHttpError(err))
    );
  }

  signup(username: string, email: string, password: string) {
    const signupUrl: string = `${this.baseUrl}/signup`;
    let params = new HttpParams();
    params = params.append('username', username);
    params = params.append('email', email);
    params = params.append('password', password);
    return this.http.get<any>(signupUrl, { params })
    .pipe(
      catchError(err => this.handleHttpError(err))
    );
  }

  isLoggedIn() {
    let loggedInStatus: boolean = false;
    if (this.userDetails.accessToken) {
      loggedInStatus = true;
    }
    console.log('logged IN', loggedInStatus);
    return loggedInStatus;
  }

  private handleHttpError(error: HttpErrorResponse) {
    return throwError(error);
  }
}

