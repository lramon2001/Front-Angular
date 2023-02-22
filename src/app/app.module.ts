
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MenubarModule } from 'primeng/menubar';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MenuModule } from 'primeng/menu';
import { UsuarioListagemComponent } from './usuario-listagem/usuario-listagem.component';
import {TableModule} from 'primeng/table';
import { DominioEmailsComponent } from './dominio-emails/dominio-emails.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    HomeComponent,
    CadastroComponent,
    UsuarioListagemComponent,
    DominioEmailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    MenubarModule,
    MenuModule,
    TableModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
