import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl = 'https://dannes-bankline-api.herokuapp.com' ; //Production
//const baseUrl = 'http://localhost:8080'; //Development

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {
  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get(`${baseUrl}/movimentacoes`);
  }

create(movimentacao:any): Observable<any> {
  return this.http.post(`${baseUrl}/movimentacoes`,movimentacao);
}

// services/movimentacao.service.ts

findByIdConta(idConta:any): Observable<any> {
  return this.http.get(`${baseUrl}/movimentacoes/${idConta}`);
}

}