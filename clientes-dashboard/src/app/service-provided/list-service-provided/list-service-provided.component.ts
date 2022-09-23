import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ServiceProvidedSearch } from './service-provided-search';
import { ServiceProvidedService } from 'src/app/service-provided.service';

@Component({
  selector: 'app-list-service-provided',
  templateUrl: './list-service-provided.component.html',
  styleUrls: ['./list-service-provided.component.css']
})
export class ListServiceProvidedComponent implements OnInit {

  name: string;
  month: number;
  months: number[];
  monthDescribed: String;
  listServiceProvided: ServiceProvidedSearch[];
  message: string;

  constructor(
    private service: ServiceProvidedService,
    private router: Router
    ) { 
    this.months = [1,2,3,4,5,6,7,8,9,10,11,12];
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.getServicesProvided(this.name, this.month)
                .subscribe( response => {
                  this.listServiceProvided = response
                  if(this.listServiceProvided.length <= 0){
                    this.message = "Nenhum registro encontrado!";
                  } else {
                    this.message = null;
                  }
                });
  }
  
  setMonthDescribed(mouthNumber: number){
    switch (mouthNumber){
      case 1:
        this.monthDescribed = "Janeiro";
        break;
      case 2:
        this.monthDescribed = "Fevereiro";
        break;
      case 3:
        this.monthDescribed = "Março";
        break;
      case 4:
        this.monthDescribed = "Abril";
        break;
      case 5:
        this.monthDescribed = "Maio";
        break;
      case 6:
        this.monthDescribed = "Junho";
        break;
      case 7:
        this.monthDescribed = "Julho";
        break;
      case 8:
        this.monthDescribed = "Agosto";
        break;
      case 9:
        this.monthDescribed = "Setembro";
        break;
      case 10:
        this.monthDescribed = "Outubro";
        break;
      case 11:
        this.monthDescribed = "Novembro";
        break;
      case 12:
        this.monthDescribed = "Dezembro";
        break;
      default:
        this.monthDescribed = "";
        break;
    }
  }

  newRegister(){
    this.router.navigate(['/service-provided']);
  }

}
