import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;
  registerUser: boolean;
  successMessage: string;
  errors: string[];

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  onSubmit(){
    this.auth.tryLogin(this.username, this.password)
              .subscribe( response => {
                const accessToken = JSON.stringify(response);
                localStorage.setItem('token', accessToken);
                this.errors = null;
                this.successMessage = null;
                this.router.navigate(['/home']);
              }, errorResponse => {
                this.successMessage = null;
                this.errors = ['Usuário e/ou senha incorreto(s)!']
              })
  }

  prepareRegisterUser(event){
    event.preventDefault();
    this.registerUser = true;
    this.cleanFields();
  }

  cancelRegisterUser(){
    this.cleanFields();
    this.registerUser = false;
  }

  cleanFields(){
    this.errors = null;
    this.successMessage = null;
    this.username = null;
    this.password = "";
  }

  serviceRegisterUser(){
    const user: User = new User();
    user.username = this.username;
    user.password = this.password;
    this.auth.registerNewUser(user)
              .subscribe( response => {
                this.successMessage = "Cadastro realizado com sucesso! Efetue o login";
                this.errors = null;
                this.registerUser = false;
              }, errorResponse => {
                this.errors = errorResponse.error.errors;
                this.successMessage = null;
              });
  }

}
