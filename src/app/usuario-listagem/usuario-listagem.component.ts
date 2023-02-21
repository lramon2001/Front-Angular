import { Usuario } from './../objetos/Usuario';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-listagem',
  templateUrl: './usuario-listagem.component.html',
  styleUrls: ['./usuario-listagem.component.css']
})
export class UsuarioListagemComponent implements OnInit {

  usuarios: Array<Usuario> = [] ;
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.listar();
  }


  listar(){
    this.usuarioService.listar().subscribe(data => {this.usuarios
      = data,console.log(this.usuarios);});
  }

  excluirItem=(id:any)=>{
    this.usuarioService.excluir(id).subscribe(erro=>alert("erro"));
  }

 
}
