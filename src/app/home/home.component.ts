import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegarParaCadastro(){
    this.router.navigate(['/cadastrar']);
  }

  navegarParaListagem(){
    this.router.navigate(['/usuarios']);
  }

  navegarParaDominios(){
    this.router.navigate(['/dominios']);
  }

}
