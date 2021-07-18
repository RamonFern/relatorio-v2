import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RelatorioService } from '../service/relatorio.service';

@Component({
  selector: 'app-novo-relatorio',
  templateUrl: './novo-relatorio.component.html',
  styleUrls: ['./novo-relatorio.component.css']
})
export class NovoRelatorioComponent implements OnInit {

  id: any
  relatorio: any
  textoBotao: string = 'Adicionar'

  constructor(private relatorioService: RelatorioService, private router: Router, private acvateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.acvateRouter.params.subscribe(parametros => {
      if(parametros['id']){
        this.textoBotao = 'Editar'
        this.id = parametros['id']
        this.relatorioService.buscarItemId(this.id).subscribe(rel => {
          this.relatorio = rel
        })
        console.log(`Id enviado: ${this.id}`)
      }
    })
  }
  
  incluir = () => {
    if(this.textoBotao == 'Adicionar'){
      this.relatorioService.novo(this.relatorio).subscribe(
        success => this.navegar('home'),
        error => console.log("ERRO não foi possivel salvar!"),
        () => console.log("Requisição completa"))
    } else {
      this.editar()
    }
  }

  editar = () => {
    this.relatorioService.editar(this.relatorio).subscribe(
      success => this.navegar('home'),
      error => console.log("Não foi possivel editar. ERRO!"),
      () => console.log('Requisição completa')
    )
  }

  navegar = (rota: any) => {
      this.router.navigate([rota])
    }

  

}
