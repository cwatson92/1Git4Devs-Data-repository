import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../../services/expense.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from '../../models/Expense';

@Component({
  selector: 'app-expense-delete',
  templateUrl: './expense-delete.component.html',
  styleUrls: ['./expense-delete.component.css']
})
export class ExpenseDeleteComponent implements OnInit {
  expense: any;

  constructor(private _expenseService: ExpenseService,
    private _ar: ActivatedRoute,
    private _router: Router) {
      this._ar.paramMap.subscribe(p => {
        this._expenseService.getSingleExpense(p.get('id')).subscribe((singleExpense: Expense) => {
          this.expense = singleExpense
        });
      });
     }

  ngOnInit() {
  }

  onDelete(){
    this._expenseService.deleteExpense(this.expense.ExpenseId).subscribe(() => {
      this._router.navigate(['/expense']);
    });
  }
}
