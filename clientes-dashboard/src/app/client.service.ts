import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Client } from './clients/clients';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  apiUrl: string = environment.apiUrlBase + '/api/clients';

  constructor( private http : HttpClient) { 

  }

  save( client: Client ) : Observable<Client>{
    return this.http.post<Client>(`${this.apiUrl}`, client);
  }

  update( client: Client ) : Observable<any>{
    return this.http.patch<any>(`${this.apiUrl}/${client.id}`, client);
  }

  delete( id:number ) : Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  getClients(): Observable<Client[]>{
    return this.http.get<Client[]>(`${this.apiUrl}`);
  }

  getClientById( id: number ) : Observable<Client>{
    return this.http.get<Client>(`${this.apiUrl}/${id}`);
  }

  
}
