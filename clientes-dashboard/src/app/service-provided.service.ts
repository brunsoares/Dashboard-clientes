import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceProvided } from './service-provided/service-provided';
import { environment } from 'src/environments/environment';
import { ServiceProvidedSearch } from './service-provided/list-service-provided/service-provided-search';

@Injectable({
  providedIn: 'root'
})
export class ServiceProvidedService {

  apiUrl: string = environment.apiUrlBase + '/api/services-provided';

  constructor(private http: HttpClient) { }

  save(serviceProvided: ServiceProvided): Observable<ServiceProvided>{
    return this.http.post<ServiceProvided>(`${this.apiUrl}`, serviceProvided);
  }

  getServicesProvided(name: string, month: number): Observable<ServiceProvidedSearch[]>{
    const httpParams = new HttpParams()
                          .set("name", name ? name : '')
                          .set("month", month ? month.toString() : '');

    const url = this.apiUrl + "?" + httpParams.toString();
    console.log(url);
    return this.http.get<ServiceProvidedSearch[]>(url);
  }
}
