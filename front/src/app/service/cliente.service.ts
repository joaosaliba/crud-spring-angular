import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private uri = 'http://localhost:8080/cliente';
  constructor(private httpClient: HttpClient) {}

  getData(
    pageIndex: number,
    pageSize: number,
    cnpj: string | null,
    nome: string | null
  ): Observable<any> {
    let params = new HttpParams()
      .set('page', (pageIndex || 0).toString())
      .set('pageSize', (pageSize || 0).toString());
    if (nome) {
      params = params.set('nome', nome); // Atribuir a nova instância ao parâmetro
    }
    if (cnpj) {
      params = params.set('cnpj', cnpj); // Atribuir a nova instância ao parâmetro
    }

    return this.httpClient.get(this.uri, { params });
  }
  async save(form) {
    return this.httpClient.post(this.uri, form).toPromise();
  }

  delete(clienteID) {
    return this.httpClient.delete(`${this.uri}/${clienteID}`);
  }

  findById(clienteID) {
    return this.httpClient.get(`${this.uri}/${clienteID}`);
  }
}
