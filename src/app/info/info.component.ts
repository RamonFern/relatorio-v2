import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RelatorioService } from '../service/relatorio.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  id: any
  relatorio: any
  veiculo: any
  placa: any

  constructor(private activateRoute: ActivatedRoute,private relatorioService: RelatorioService,
    private router: Router) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(parametros => {
      if(parametros['id']){
        this.id = parametros['id']
        this.relatorioService.buscarItemId(this.id).subscribe(rel => {
          this.relatorio = rel
        })
        console.log(`Id enviado: ${this.id}`)
      }
    })
  }

 

}
