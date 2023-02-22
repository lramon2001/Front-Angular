import { Mes } from './../objetos/Mes';
import { Router } from '@angular/router';
import { Usuario } from './../objetos/Usuario';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';
@Component({
  selector: 'app-usuario-listagem',
  templateUrl: './usuario-listagem.component.html',
  styleUrls: ['./usuario-listagem.component.css'],
})
export class UsuarioListagemComponent implements OnInit {

  usuarios: Array<Usuario> = [] ;
  nomePesquisa:string = "";
  meses: Array<Mes> = [];
  mesPesquisa:any;
  constructor(private usuarioService:UsuarioService,private router:Router) { }

  ngOnInit(): void {
    this.listar();
    this.obterMeses();
  }


  listar(){
    this.usuarioService.listar(this.nomePesquisa).subscribe(data => {this.usuarios
      = data,console.log(this.usuarios);});
  }

  listarAniversariantes(){
    this.usuarioService.obterAniversariantes(this.mesPesquisa).subscribe(data => {this.usuarios
      = data,console.log(this.usuarios);});
  }

  excluirItem=(id:any)=>{
    this.usuarioService.excluir(id).subscribe(erro=>alert("erro"));
  }

  editar(id:any){
    this.router.navigate(['cadastrar',id]);
  }
 
  obterMeses(){
    this.usuarioService.obterMeses().subscribe(data => this.meses = data);
  }

}
