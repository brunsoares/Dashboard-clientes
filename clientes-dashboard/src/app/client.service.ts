import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Client } from './clients/clients';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor( private http : HttpClient) { 

  }

  save( client: Client) : Observable<Client>{
    return this.http.post<Client>('http://localhost:8080/api/clients', client);
  }

  
}
