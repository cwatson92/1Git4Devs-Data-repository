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
  constructor(private _form: FormBuilder,
              private _expenseService: ExpenseService,
              private _ar: ActivatedRoute,
              private _router: Router,
              private _activatedRoute : ActivatedRoute) {     
    
    this._ar.paramMap.subscribe(p => {
      this._expenseService.editExpense(p.get('id')).subscribe((singleExpense: Expense) => {
        this.expense = singleExpense;
        console.log(this._ar)
        this.createForm();
      });
    });            
  }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      console.log(routeData)
    })
  }

  createForm() {
    this.editExpenseForm = this._form.group({
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
    this._expenseService.updateExpense(updateExpense, updateExpense.ExpenseId.toString()).subscribe(d => {
      this._router.navigate(['/expense']);
    });
  }

}
