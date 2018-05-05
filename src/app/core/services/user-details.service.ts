import { Injectable } from '@angular/core';

@Injectable()
export class UserDetailsService {
  private user: any = {
    token: null,
    name: null
  };

  constructor() { }

  set accessToken(accessToken: string) {
    localStorage.setItem('token', accessToken);
    this.user.token = accessToken;
  }

  get accessToken(): string {
  return localStorage.getItem('token');
  }

  /// save the username into local storage as well
  set username(username: string) {
    this.user.name = username;
  }

  /// save the username into local storage as well
  get username(): string {
    return this.user.name;
  }

}
