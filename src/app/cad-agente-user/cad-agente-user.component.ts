import { AgenteUser } from './../models/AgenteUser';
import { ServiceAgenteUserService } from './../service/service-agente-user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cad-agente-user',
  templateUrl: './cad-agente-user.component.html',
  styleUrls: ['./cad-agente-user.component.css']
})
export class CadAgenteUserComponent implements OnInit {
  id: any
  agenteUser: AgenteUser = new AgenteUser('', '', 0)
  textoBotao: string = "Adicionar"
  constructor(private agenteUserService: ServiceAgenteUserService,
              private router: Router,
              private acvateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.acvateRouter.params.subscribe(parametros => {
      if(parametros['id']){
        this.textoBotao = 'Editar'
        this.id = parametros['id']
        this.agenteUserService.buscarItemId(this.id).subscribe(agente => {
          this.agenteUser = agente
        })
        console.log(`Id enviado: ${this.id}`)
      }
    })
  }

  adicionar = () => {
    if(this.textoBotao == 'Adicionar'){
      this.agenteUserService.adicionar(this.agenteUser).subscribe(
        success => this.navegar('listaAgentes'),
        error => console.log("ERRO não foi possivel salvar!"),
        () => console.log("Requisição completa"))
    } else {
      this.editar()
    }
  }

  editar = () => {
    this.agenteUserService.editar(this.agenteUser).subscribe(
      success => this.navegar('listaAgentes'),
      error => console.log("Não foi possivel editar. ERRO!"),
      () => console.log('Requisição completa')
    )
  }

  navegar = (rota: any) => {
    this.router.navigate([rota])
  }
}
