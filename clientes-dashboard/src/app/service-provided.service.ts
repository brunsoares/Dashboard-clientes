import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceProvided } from './service-provided/service-provided';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceProvidedService {

  apiUrl: string = environment.apiUrlBase + '/api/services-provided';

  constructor(private http: HttpClient) { }

  save(serviceProvided: ServiceProvided): Observable<ServiceProvided>{
    return this.http.post<ServiceProvided>(`${this.apiUrl}`, serviceProvided);
  }
}
