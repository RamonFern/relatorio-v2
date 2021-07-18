import { RelatorioService } from './../service/relatorio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  veiculo: any
  constructor(private relatorioService: RelatorioService) { }

  ngOnInit(): void {

  }

}
