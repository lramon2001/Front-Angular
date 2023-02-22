import { Usuario } from './../objetos/Usuario';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  id: any;
  usuario : Usuario = new Usuario(); 
  textoBotao: string = "Cadastrar";
  editando: boolean = false;
  logado: boolean = environment.LOGADO;
  constructor(private usuarioService :UsuarioService,private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params['id']){
        this.id = params['id'];
        this.usuarioService.obterPorId(this.id).subscribe(usuario => this.usuario = usuario);
        this.textoBotao = "Atualizar";
        this.editando = true;
      }
    });
  }

  adicionar =() =>{
    if(!this.editando){
    this.usuarioService.adicionar(this.usuario).subscribe(erro=>alert("erro"));
    }else{
      this.atualizar();
    }
  }

  atualizar =() =>{
    this.usuarioService.atualizar(this.usuario).subscribe(erro=>alert("erro"));
  }
}
