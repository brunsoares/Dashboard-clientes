import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClientService } from 'src/app/client.service';
import { Client } from '../clients';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {

  clients: Client[] = [];
  selectedClient: Client;
  successMessage: string;
  errorMessage: string;

  constructor(  
    private service: ClientService, 
    private router: Router) { }

  ngOnInit(): void {
    this.service.getClients().subscribe(response => this.clients = response);
  }


  newRegister(){
    this.router.navigate(['/client']);
  }

  prepareDeletion(client: Client){
    this.selectedClient = client;
  }

  deleteClient(){
    this.service.delete(this.selectedClient.id)
                .subscribe(
                  reponse => {
                    this.successMessage = 'Cliente deletado com sucesso!'
                    this.ngOnInit();
                },
                  errorResponse => this.errorMessage = 'Erro ao deletar cliente!'
                  );
  }

}
