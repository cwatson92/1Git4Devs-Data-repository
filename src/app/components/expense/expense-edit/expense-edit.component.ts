import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../../services/expense.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from '../../models/Expense';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-expense-edit',
  templateUrl: './expense-edit.component.html',
  styleUrls: ['./expense-edit.component.css']
})
export class ExpenseEditComponent implements OnInit {

  expense: Expense;

  editExpenseForm: FormGroup;
  constructor(private _from: FormBuilder,
              private _expenseService: ExpenseService,
              private _ar: ActivatedRoute,
              private _router: Router) {
    
    this._ar.paramMap.subscribe(p => {
      this._expenseService.getExpense().subscribe((singleExpense: Expense) => {
        this.createForm();
      });
    });            
  }

  ngOnInit() {
  }

  createForm() {
    this.editExpenseForm = this._from.group({
      ExpenseId: new FormControl(this.expense.ExpenseId),
      Name: new FormControl(this.expense.Name),
      Cost: new FormControl(this.expense.Cost),
      Description: new FormControl(this.expense.Description)  
    });
  }

  onSubmit(form) {
    const updateExpense: Expense = {
      ExpenseId: form.value.ExpenseId,
      Name: form.value.Name,
      Cost: form.value.Cost,
      Description: form.value.Description
    };
    this._expenseService.updateExpense(updateExpense).subscribe(d => {
      this._router.navigate(['/expense']);
    });
  }

}
