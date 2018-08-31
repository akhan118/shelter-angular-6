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

  signup(signupData: object) {
    console.log(signupData)
    const signupUrl: string = `${this.baseUrl}/signup`;
    return this.http.post(signupUrl, { signupData });
  }

  isLoggedIn(): boolean {
    let loggedInStatus: boolean = false;
    const accessToken = localStorage.getItem('ACCESS_TOKEN');
    if (accessToken) {
      loggedInStatus = true;
    }
    return loggedInStatus;
  }

  private handleHttpError(error: HttpErrorResponse): Observable<HttpErrorResponse> {
    return throwError(error);
  }
}

