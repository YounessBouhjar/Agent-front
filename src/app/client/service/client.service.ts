import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private clientUrl: string;
  constructor(private http: HttpClient) {
    this.clientUrl = 'http://localhost:9191/agent';
  }


  public save(client: Client) :Observable<Client>{
    let username = sessionStorage.getItem('email');
    let password = atob(sessionStorage.getItem('password'));
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password),
    });
    return this.http.post<Client>(this.clientUrl + '/client/add', client,{headers});
  }

  public delete(id: number): Observable<void> {
    let username = sessionStorage.getItem('email');
    let password = atob(sessionStorage.getItem('password'));
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password),
    });
    return this.http.delete<void>(`${this.clientUrl}/client/delete/${id}`,{headers});
  }


  public allClients():Observable<Client[]>{
    let username = sessionStorage.getItem('email');
    let password = atob(sessionStorage.getItem('password'));
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password),
    });

    return this.http.get<Client[]>(`${this.clientUrl}/client/all`,{headers});

  }
  public update(client: Client): Observable<Client> {
    let email = sessionStorage.getItem('email');
    let password = atob(sessionStorage.getItem('password'));
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(email + ':' + password),
    });
    return this.http.put<Client>(`${this.clientUrl}/client/updateClient`, client,{headers});
  }
  public findClient(id: number): Observable<any> {
    let email = sessionStorage.getItem('email');
    let password = atob(sessionStorage.getItem('password'));
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(email + ':' + password),
    });
    return this.http.get<Client[]>(`${this.clientUrl}/client/findid/${id}`,{headers});
  }
  public findClientCin(cin: string): Observable<any> {
    let email = sessionStorage.getItem('email');
    let password = atob(sessionStorage.getItem('password'));
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(email + ':' + password),
    });
    return this.http.get<Client[]>(`${this.clientUrl}/client/findcin/${cin}`,{headers});
  }
}
