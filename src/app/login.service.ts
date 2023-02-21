import { Login } from './objetos/Login';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly API = `${environment.API}/login`;
  constructor(private http: HttpClient) { }

  logar(login: Login){
    return this.http.post<Login>(this.API,login);
  }

  get(){
    return this.http.get(this.API);
  }
}
