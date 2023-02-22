
import { LoginService } from './../login.service';
import { Login } from './../objetos/Login';
import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor(private loginService: LoginService, private routerModule: RouterModule,
    private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

  }

  login: Login = new Login("", "");

  navegarParaCadastro() {
    this.router.navigate(['cadastrar']);
  }
  logar() {
    this.loginService.logar(this.login).subscribe(
      (p) => {
        if (p){
          this.router.navigate(['home'])
          environment.LOGADO = true;
        }
      }
    );

  }

}
