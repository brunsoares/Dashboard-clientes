import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

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
  id: number;

  constructor( 
    private service : ClientService, 
    private router: Router,
    private activatedRoute: ActivatedRoute ) { 
    this.client = new Client
  }

  ngOnInit(): void {
    let params = this.activatedRoute.params;
    params.subscribe( urlParams => {
      this.id = urlParams['id']
      if(this.id){
        this.service.getClientById(this.id)
                    .subscribe(response => this.client = response,
                      errorResponse => this.client = new Client())
      }
    });

  }

  onSubmit(){
    if(this.id){
      this.updateClient();
    } else {
      this.saveClient();
    }
    
  }

  saveClient(){
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

  updateClient(){
    this.service.update(this.client)
                .subscribe( response => {
                  this.success = true;
                  this.errors = null;
                },
                  errorResponse => {
                    this.success = false;
                    this.errors = ['Erro ao atualizar cliente!'];
                });
  }

  returnListClients(){
    this.router.navigate(['/list-clients']);
  }

}
