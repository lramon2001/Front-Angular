import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Usuario } from './objetos/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly API = `${environment.API}/usuarios`;
  constructor(private httpClient: HttpClient) { }

  listar(){
    return this.httpClient.get<Usuario[]>(this.API);
  }

  excluir(id:any){
    alert("SSSS")
    return this.httpClient.delete(`${this.API}/${id}`);
  }
}
