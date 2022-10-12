import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const tokenStorage = localStorage.getItem('token');
    const url = request.url;
    if(tokenStorage && !url.endsWith('/oauth/token')){
      const token = JSON.parse(tokenStorage);
      const jwt = token.access_token;
      request = request.clone({
        setHeaders:{
          Authorization: 'Bearer ' + jwt
        }
      })
    }
    
    return next.handle(request);
  }
}
