import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Expense } from '../components/models/Expense';

const ApiUrl = 'https://cashflowfinances.azurewebsites.net/'

@Injectable()
export class ExpenseService {

  constructor(private _http:HttpClient) { }

  getExpense() {
    return this._http.get(`${ApiUrl}api/Expense/`, { headers: this.getHeaders()});
  }

  getSingleExpense(id: string){
    return this._http.get(`${ApiUrl}api/expense/${id}`, { headers: this.getHeaders() });

  }

  createExpense(expense: Expense){
    return this._http.post(`${ApiUrl}api/Expense/`, expense, { headers: this.getHeaders()});
  }

  editExpense(id: string) {
    return this._http.get(`${ApiUrl}api/Expense/${id}`, { headers: this.getHeaders()});
  }

  updateExpense(expense: Expense, id: string) {
    return this._http.put(`${ApiUrl}api/Expense/${id}`, expense, { headers: this.getHeaders() });
  }

  deleteExpense(id: number) {
    return this._http.delete(`${ApiUrl}api/Expense/${id}`, { headers: this.getHeaders()});
  }
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`); 
  }
}
