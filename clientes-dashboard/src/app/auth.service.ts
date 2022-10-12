import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './login/user';

import { environment } from 'src/environments/environment';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl:string = environment.apiUrlBase + "/api/users";
  tokenUrl:string = environment.apiUrlBase + environment.tokenUrl;
  clientID:string = environment.clientId;
  clientSecret:string = environment.clientSecret;
  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(
    private http: HttpClient
  ) { }

  getTokenFromLocalStorage(){
    const tokenStorage = localStorage.getItem('token');
    if(tokenStorage){
      const token = JSON.parse(tokenStorage).access_token;
      return token;
    }
    return null;
  }

  isAuthenticated(): boolean{
    const token = this.getTokenFromLocalStorage();
    if(token){
      const expired = this.jwtHelper.isTokenExpired(token);
      return !expired;
    }
    return false;
  }

  logoutSession(){
    localStorage.removeItem('token');
  }

  getAuthenticatedUser(){
    const token = this.getTokenFromLocalStorage();
    if(token){
      const user = this.jwtHelper.decodeToken(token).user_name;
      return user;
    }
    return null;
  }

  registerNewUser(user: User): Observable<any>{
    return this.http.post<any>(this.apiUrl, user);
  }

  tryLogin(username:string, password:string): Observable<any>{
    const params = new HttpParams()
                      .set('username', username)
                      .set('password', password)
                      .set('grant_type', 'password');
    const headers = {
      'Authorization': 'Basic ' + btoa(`${this.clientID}:${this.clientSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded'
    };

    return this.http.post<any>(this.tokenUrl, params.toString(), { headers });
  }

}
