import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NetWorth } from '../components/models/NetWorth';

const ApiUrl = 'https://cashflowfinances.azurewebsites.net/'

@Injectable() 
export class NetWorthService {

  constructor(private _http: HttpClient) { }

  getNetWorth() {
    return this._http.get(`${ApiUrl}api/netWorth/`, { headers: this.getHeaders() });
  }

  getNetWorthDetails(id: string) {
    return this._http.get(`${ApiUrl}api/netWorth/${id}`, { headers: this.getHeaders() });
  }

  createNetWorth(netWorth: NetWorth) {
    return this._http.post(`${ApiUrl}/api/NetWorth`, netWorth, {headers: this.getHeaders()});
  }

  updateNetWorth(netWorth: NetWorth, id: string) {
    return this._http.put(`${ApiUrl}api/NetWorth/${id}`, netWorth, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);

  }
}
