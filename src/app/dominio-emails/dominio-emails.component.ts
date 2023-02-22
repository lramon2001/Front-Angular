import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { Dominio } from '../objetos/Dominio';

@Component({
  selector: 'app-dominio-emails',
  templateUrl: './dominio-emails.component.html',
  styleUrls: ['./dominio-emails.component.css']
})
export class DominioEmailsComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  dominios: Array<Dominio> = [] ;
  contador: number = 1;
  ngOnInit(): void {
    this.obterDominios();
  }


  obterDominios(){
    this.usuarioService.obterDominios().subscribe(data => this.dominios = data);
  }

}
