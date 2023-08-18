import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private uri = "http://localhost:8080/cliente";
  constructor(private httpClient: HttpClient) { }


  getData(pageIndex: number, pageSize: number): Observable<any> {
    const params = new HttpParams()
      .set('page',(pageIndex || 0).toString())
      .set('size', (pageSize || '').toString());

    return this.httpClient.get(this.uri, { params });
  }
 async save(form) {
    return this.httpClient
      .post(this.uri, form)
      .toPromise()
  }
}
