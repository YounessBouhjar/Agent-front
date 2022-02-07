import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from '../model/account';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private compteUrl: string;
  constructor(private http: HttpClient) {
    this.compteUrl = 'http://localhost:9191/agent';
  }
  

  public save(account: Account) :Observable<Account>{
    let username = sessionStorage.getItem('email');
    let password = atob(sessionStorage.getItem('password'));
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password),
    });
    return this.http.post<Account>(this.compteUrl + '/compte/add', account,{headers});
  }


  public findAccountByIdClient(idClient:any): Observable<Account[]> {
    let username = sessionStorage.getItem('email');
    let password = atob(sessionStorage.getItem('password'));
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password),
    });
    return this.http.get<Account[]>(`${this.compteUrl}/compte/findClient/${idClient}`, {
      headers,
    });
  }

}
