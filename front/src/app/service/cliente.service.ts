import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private uri = "http://localhost:8080/cliente";
  constructor(private httpClient: HttpClient) { }


 async save(form) {
    return this.httpClient
      .post(this.uri, form)
      .toPromise()
  }
}
