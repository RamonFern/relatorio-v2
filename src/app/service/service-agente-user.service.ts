import { AgenteUser } from './../models/AgenteUser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceAgenteUserService {

  constructor(private httpClient: HttpClient) { }

  listar() {  //https://relatorio-diario.herokuapp.com/api/v1/relatorio
    return this.httpClient.get('https://relatorio-diario.herokuapp.com/api/v2/agenteUser');
    //return this.httpClient.get('http://localhost:8080/api/v2/agenteUser');
  }

  adicionar(agenteUser: AgenteUser) {
    return this.httpClient.post('https://relatorio-diario.herokuapp.com/api/v2/agenteUser', agenteUser);
  }

  buscarItemId(id: any){
    return this.httpClient.get<AgenteUser>(`https://relatorio-diario.herokuapp.com/api/v2/agenteUser/${id}`)
  }

  editar(agenteUser: AgenteUser){
    return this.httpClient.put(`https://relatorio-diario.herokuapp.com/api/v2/agenteUser/${agenteUser.id}`, agenteUser)
  }

  excluir(id: any) {
    return this.httpClient.delete(`https://relatorio-diario.herokuapp.com/api/v2/agenteUser/${id}`)
  }
}
