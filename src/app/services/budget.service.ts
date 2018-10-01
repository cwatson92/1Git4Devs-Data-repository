import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Budget } from '../components/models/Budget';

const ApiUrl = 'https://cashflowfinances.azurewebsites.net/';

@Injectable()

export class BudgetService {
  getBudgetDetail(arg0: string): any {
    throw new Error("Method not implemented.");
  }

  
  constructor(private _http: HttpClient) { }

  getSingleBudget(id: string){
    return this._http.get(`${ApiUrl}api/Budget/${id}`, { headers: this.getHeaders() });

  }
  getBudget() {
    return this._http.get(`${ApiUrl}api/Budget`, { headers: this.getHeaders()});
  }

  createBudget(budget: Budget) {
    return this._http.post(`${ApiUrl}api/Budget`, budget, {headers: this.getHeaders()});
  }

  updateBudget(budget: Budget, id: number) {
    return this._http.put(`${ApiUrl}api/Budget/${id}`, budget, { headers: this.getHeaders() });
  }

  deleteBudget(id: number) {
    return this._http.delete(`${ApiUrl}api/Budget/${id}`, { headers: this.getHeaders()});
  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
  
}
