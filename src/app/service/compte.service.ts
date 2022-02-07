import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compte } from '../Model/compte';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  private compteUrl: string;
  constructor(private http: HttpClient) {
    this.compteUrl = 'http://localhost:9191/agent/';
  }

  public addCompte(compte:Compte): Observable<any> {
    let email = sessionStorage.getItem('email');
    let password = atob(sessionStorage.getItem('password'));
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(email + ':' + password),
    });
    return this.http.post<Compte>(this.compteUrl + 'compte/add',compte, {
      headers,
    });
  }
  public findCompte(): Observable<any> {
    let email = sessionStorage.getItem('email');
    let password = atob(sessionStorage.getItem('password'));
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(email + ':' + password),
    });
    return this.http.get<Compte>(`${this.compteUrl}compte/getBackoffice`,{headers});
  }
  public findCompteByAgent(idAgent:number): Observable<any> {
    let email = sessionStorage.getItem('email');
    let password = atob(sessionStorage.getItem('password'));
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(email + ':' + password),
    });
    return this.http.get<Compte>(`${this.compteUrl}compte/findAgent/${idAgent}`,{headers});
  }

  public update(idAgent:number,solde: number): Observable<any> {
    let email = sessionStorage.getItem('email');
    let password = atob(sessionStorage.getItem('password'));
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(email + ':' + password),
    });
    console.log(solde)
    console.log(solde.toString())
    let params = new HttpParams()
      .set('idAgent', idAgent.toString())
      .set('solde', solde.toString())
    return this.http.put<Compte>(
      this.compteUrl+"compte/updateSold/"+idAgent, null, {
        headers: headers,
        params: params,
      });
  }



  
}