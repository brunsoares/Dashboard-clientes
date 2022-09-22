import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/clients/clients';
import { ClientService } from '../../client.service';
import { ServiceProvided } from '../service-provided';

@Component({
  selector: 'app-service-provided-form',
  templateUrl: './service-provided-form.component.html',
  styleUrls: ['./service-provided-form.component.css']
})
export class ServiceProvidedFormComponent implements OnInit {

  clients: Client[] = [];
  service: ServiceProvided;

  constructor(
    private clientService: ClientService
  ) {
    this.service = new ServiceProvided();
   }

  ngOnInit(): void {
    this.clientService.getClients()
                      .subscribe( response => this.clients = response);
  }

  onSubmit(){
    console.log(this.service);
  
  }
}
