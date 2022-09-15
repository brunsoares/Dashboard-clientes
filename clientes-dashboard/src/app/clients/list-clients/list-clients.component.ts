import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientService } from 'src/app/client.service';
import { Client } from '../clients';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {

  clients: Client[] = [];

  constructor( private service: ClientService) { }

  ngOnInit(): void {
    this.clients = this.service.getClients();
  }

 

}
