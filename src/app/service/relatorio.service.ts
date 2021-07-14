import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Relatorio } from '../models/Relatorio';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {

  constructor(private httpClient: HttpClient) { }

  listar() {
    //return this.httpClient.get('https://relatorio-diario.herokuapp.com/api/v1/relatorio');
    return this.httpClient.get('http://localhost:8080/api/v1/relatorio');
    
  }

  novo(relatorio: Relatorio){
    return this.httpClient.post('http://localhost:8080/api/v1/relatorio', relatorio)
  }

  excluir(id: any) {
    return this.httpClient.delete(`http://localhost:8080/api/v1/relatorio/${id}`)
  }

  editar(relatorio: Relatorio){
    return this.httpClient.put(`http://localhost:8080/api/v1/relatorio/${relatorio.id}`, relatorio)
  }

  buscarItemId(id: any){
    return this.httpClient.get<Relatorio>(`http://localhost:8080/api/v1/relatorio/${id}`)
  }
  
}
