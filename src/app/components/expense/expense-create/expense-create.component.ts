import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../../services/expense.service';
import { FormBuilder,FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense-create',
  templateUrl: './expense-create.component.html',
  styleUrls: ['./expense-create.component.css']
})
export class ExpenseCreateComponent implements OnInit {

  expenseForm: FormGroup;

  constructor(private _expenseService: ExpenseService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.expenseForm = this._form.group({
      Name: new FormControl,
      Cost: new FormControl,
      Description: new FormControl
    })
  }

  onSubmit() {
    console.log(this.expenseForm.value)
    this._expenseService.createExpense(this.expenseForm.value).subscribe(data => {
      this._router.navigate(['/expense']);
    })
  }

}
