import { LoginService } from './../login.service';
import { Login } from './../objetos/Login';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    
  }

  login: Login = new Login("","");

  logar() {
    this.loginService.logar(this.login).subscribe();
  }

}
