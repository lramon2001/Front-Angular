import { LoginComponentComponent } from './login-component/login-component.component';
import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes,Router } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { UsuarioListagemComponent } from './usuario-listagem/usuario-listagem.component';

const routes: Routes = [
  { path: 'login', component: LoginComponentComponent},
  { path: 'home', component: HomeComponent},
  { path: 'cadastrar', component: CadastroComponent},
  { path: 'usuarios', component: UsuarioListagemComponent},
  { path: 'usuarios/:id', component: UsuarioListagemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    
  }

  OnInit(): void {
    this.router.navigate(['login']);
  }
 }
