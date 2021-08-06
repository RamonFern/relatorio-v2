import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RelatorioService } from '../service/relatorio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  relatorioList: any
  relatorio: any
  constructor(private relatorioService: RelatorioService, private router: Router) { }

  ngOnInit(): void {
    this.relatorioService.listar().subscribe(relatorios => {
      console.log(relatorios)
      this.relatorioList = relatorios
    })
    console.log(this.relatorioList)
  }

  excluir = (id: any) => {
    this.relatorioService.excluir(id).subscribe(
      success => console.log("Deletado com sucesso"),
      error => console.log("Erro não foi possivel deletar.!"),
      () => console.log("Requisição completa!")),
      this.ngOnInit();
  }

  editar = (id: any) => {
    this.router.navigate(['novo', id])
  }
  
  info(id: any){
    this.router.navigate(['info', id])
  }
  
}
