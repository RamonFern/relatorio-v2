import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Relatorio } from '../models/Relatorio';
import { RelatorioService } from '../service/relatorio.service';

@Component({
  selector: 'app-novo-relatorio',
  templateUrl: './novo-relatorio.component.html',
  styleUrls: ['./novo-relatorio.component.css']
})
export class NovoRelatorioComponent implements OnInit {

  relatorio: Relatorio = new Relatorio('','', '')
  constructor(private relatorioService: RelatorioService, private router: Router) { }

  ngOnInit(): void {
  }

  novo = () => {
    this.relatorioService.novo(this.relatorio).subscribe(
      success => console.log("Salvo com sucesso"),
      error => console.log("ERRO não foi possivel salvar!"),
      () => console.log("Requisição completa"))
      this.router.navigate(['home'])
     }

}
