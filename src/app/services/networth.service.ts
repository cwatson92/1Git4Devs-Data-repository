import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ApiUrl = 'https://cashflowfinances.azurewebsites.net/'

@Injectable() 
export class NetWorthService {

  constructor(private _http: HttpClient) { }

  getNetWorth() {
    return this._http.get(`${ApiUrl}api/netWorth/`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);

  }
}
