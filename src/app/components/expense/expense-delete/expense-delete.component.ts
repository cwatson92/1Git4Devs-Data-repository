import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../../services/expense.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-expense-delete',
  templateUrl: './expense-delete.component.html',
  styleUrls: ['./expense-delete.component.css']
})
export class ExpenseDeleteComponent implements OnInit {

  constructor(private _expenseService: ExpenseService,
    private _ar: ActivatedRoute,
    private _router: Router) {
      // this._ar.paramMap.subscribe(p => {
      //   this._expenseService.getExpense(p.get('id')).subscribe(singleExpense: Expense) => {
      //     this.expense = singleExpense
      //   }
      //})
     }

  ngOnInit() {
  }

}
