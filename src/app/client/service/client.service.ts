import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private clientUrl: string;
  constructor(private http: HttpClient) {
    this.clientUrl = 'http://localhost:9191/client';
  }
  public findAll(nom: string): Observable<any> {
    return this.http.get(
      'http://localhost:9191/compte/find/compte/' + nom
    );
  }
  public findClient2(code: string): Observable<Client> {
    return this.http.get<Client>(this.clientUrl + '/' + code);
  }

  public save(client: Client) {
    return this.http.post<Client>(this.clientUrl + '/add', client);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.clientUrl}/delete/${id}`);
  }
}
