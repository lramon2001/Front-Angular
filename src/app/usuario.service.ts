import { Dominio } from './objetos/Dominio';
import { Mes } from './objetos/Mes';
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

  listar(nome: string){
    return this.httpClient.get<Usuario[]>(`${this.API}/nomes?nome=${nome}`);
  }

  excluir(id:any){
    return this.httpClient.delete(`${this.API}/${id}`);
  }

  adicionar(usuario: Usuario){
    return this.httpClient.post(this.API,usuario);
  }

  obterPorId(id:any){
    return this.httpClient.get<Usuario>(`${this.API}/${id}`);
  }
  atualizar(usuario: Usuario){
    return this.httpClient.put(`${this.API}/${usuario.id}`,usuario);
  }

  obterMeses(){
    return this.httpClient.get<Mes[]>(`${this.API}/meses`);
  }

  obterAniversariantes(mes:any){
    return this.httpClient.get<Usuario[]>(`${this.API}/aniversariantes?mes=${mes}`);
  }
  
  obterDominios(){
    return this.httpClient.get<Dominio[]>(`${this.API}/dominios`);
  }
}