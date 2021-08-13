import { Router } from '@angular/router';
import { AgenteUser } from './../models/AgenteUser';
import { ServiceAgenteUserService } from './../service/service-agente-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-agentes',
  templateUrl: './lista-agentes.component.html',
  styleUrls: ['./lista-agentes.component.css']
})
export class ListaAgentesComponent implements OnInit {

  agenteUserList: any
  agenteUser: any
  constructor(private agenteService: ServiceAgenteUserService, private router: Router) { }

  ngOnInit(): void {
    this.agenteService.listar().subscribe(agentes => {
      console.log(agentes)
      this.agenteUserList = agentes
    })
    console.log(this.agenteUserList)
    
  }

  editar = (id: any) => {
    this.router.navigate(['cad', id])
  }

  excluir = (id: any) => {
    this.agenteService.excluir(id).subscribe(
      success => console.log("Deletado com sucesso"),
      error => console.log("Erro não foi possivel deletar.!"),
      () => console.log("Requisição completa!")),
      this.ngOnInit();
  }
}
