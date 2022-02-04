import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Account } from '../model/account';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  url = 'http://localhost:9191/';
  private accountUrl: string;
  constructor(private http: HttpClient) {
    this.accountUrl = this.url + 'agent/';
  }
  /*   public findAll(): Observable<Account[]> {
    return this.http.get<Account[]>(this.accountUrl + 's');
  } */
  public findAll(code: string): Observable<any> {
    return this.http.get(
      this.url + 'agent/' + code + '/comptes'
    );
  }
  public findCodeDevise(code: string): Observable<any> {
    return this.http.get(
      'http://localhost:9191/comptes/' + code
    );
  }
  public findAccount(code: string): Observable<any> {
    return this.http.get(this.accountUrl + '/' + code);
  }

  public save(account: Account) {
    return this.http.post<Account>(this.accountUrl , account);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.accountUrl}/delete/${id}`);
  }
}
