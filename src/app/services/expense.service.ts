import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Expense } from '../components/models/Expense';

const ApiUrl = 'https://cashflowfinances.azurewebsites.net/api/expense/'

@Injectable()
export class ExpenseService {

  constructor(private _http:HttpClient) { }

  getExpense() {
    return this._http.get(`${ApiUrl}/Expense`, { headers: this.getHeaders()});
  }

  createExpense(expense: Expense){
    return this._http.post(`${ApiUrl}/Expense`, expense, { headers: this.getHeaders()});
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
