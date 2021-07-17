import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Relatorio } from '../models/Relatorio';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {

  private readonly API = `${environment.API}`
  constructor(private httpClient: HttpClient) { }

  listar() {
    return this.httpClient.get(`${this.API}`);
    
  }

  novo(relatorio: Relatorio){
    return this.httpClient.post(this.API, relatorio)
  }

  excluir(id: any) {
    return this.httpClient.delete(`${this.API}/${id}`)
  }

  editar(relatorio: Relatorio){
    return this.httpClient.put(`${this.API}/${relatorio.id}`, relatorio)
  }

  buscarItemId(id: any){
    return this.httpClient.get<Relatorio>(`${this.API}/${id}`)
  }
  
}
