import { Component, OnInit } from '@angular/core';

import { Client } from '../clients';

import { ClientService } from '../../client.service';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent implements OnInit {

  client: Client;
  success: boolean = false;
  errors: String[];

  constructor( private service : ClientService) { 
    this.client = new Client
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.save(this.client)
                .subscribe( response => {
                  this.success = true;
                  this.errors = String[""];
                  this.client = response;
                },
                  errorResponse => {
                    this.success = false;
                    this.errors = errorResponse.error.errors;
                });
  }

}
