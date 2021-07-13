import { Component, OnInit } from '@angular/core';
import { RelatorioService } from '../service/relatorio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  relatorioList: any
  constructor(private relatorioService: RelatorioService) { }

  ngOnInit(): void {
    this.relatorioService.listar().subscribe(relatorios => {
      console.log(relatorios)
      this.relatorioList = relatorios
    })
    console.log(this.relatorioList)
  }

  

}
