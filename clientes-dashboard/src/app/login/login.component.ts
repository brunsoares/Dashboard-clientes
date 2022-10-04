import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;
  loginError: boolean;
  registerUser: boolean;

  constructor(
    private router: Router
  ) { }

  onSubmit(){
    this.router.navigate(['/home']);
    console.log(this.username+" - "+this.password);
  }

  prepareRegisterUser(event){
    event.preventDefault();
    this.registerUser = true;
  }

  cancelRegisterUser(){
    this.registerUser = false;
  }

}
