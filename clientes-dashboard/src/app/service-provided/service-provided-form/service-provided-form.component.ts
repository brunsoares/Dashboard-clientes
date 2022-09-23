import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Client } from 'src/app/clients/clients';
import { ClientService } from '../../client.service';
import { ServiceProvided } from '../service-provided';
import { ServiceProvidedService } from 'src/app/service-provided.service';

@Component({
  selector: 'app-service-provided-form',
  templateUrl: './service-provided-form.component.html',
  styleUrls: ['./service-provided-form.component.css']
})
export class ServiceProvidedFormComponent implements OnInit {

  clients: Client[] = [];
  serviceModel: ServiceProvided;
  success: boolean = false;
  errors: String[];

  constructor(
    private clientService: ClientService,
    private service: ServiceProvidedService,
    private router: Router
  ) {
    this.serviceModel = new ServiceProvided();
   }

  ngOnInit(): void {
    this.clientService.getClients()
                      .subscribe( response => this.clients = response);
  }

  onSubmit(){
    this.service.save(this.serviceModel)
                .subscribe( response => {
                  this.success = true;
                  this.errors = String[""];
                  this.serviceModel = new ServiceProvided();
                },
                  errorResponse => {
                    this.success = false;
                    this.errors = errorResponse.error.errors;
                });
  
  }

  returnListServices(){
    this.router.navigate(['/list-service-provided']);
  }
}
