import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../../services/expense.service';
import { Expense } from '../../models/Expense';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-expense-index',
  templateUrl: './expense-index.component.html',
  styleUrls: ['./expense-index.component.css']
})
export class ExpenseIndexComponent implements OnInit {
  columnNames = ['Name', 'Cost', 'Description', 'Edit', 'Delete']
  dataSource: MatTableDataSource<Expense>

  constructor(private _expenseService: ExpenseService) { }

  ngOnInit() {
    this._expenseService.getExpense().subscribe((expense:Expense[]) => {
      console.log(expense);
    this.dataSource = new MatTableDataSource<Expense>(expense);
    });
  }

}
