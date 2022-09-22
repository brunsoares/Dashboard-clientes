import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-service-provided',
  templateUrl: './list-service-provided.component.html',
  styleUrls: ['./list-service-provided.component.css']
})
export class ListServiceProvidedComponent implements OnInit {

  name: string;
  month: number;
  months: number[];

  constructor() { 
    this.months = [1,2,3,4,5,6,7,8,9,10,11,12];
  }

  ngOnInit(): void {
  }

  onSubmit(){
    
  }

}
