import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../../../services/budget.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budget-create',
  templateUrl: './budget-create.component.html',
  styleUrls: ['./budget-create.component.css']
})
export class BudgetCreateComponent implements OnInit {

  budgetForm: FormGroup;

  constructor(private _budgetService: BudgetService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.budgetForm = this._form.group({
      MonthlyIncome: new FormControl,
      EstimatedAvailableBalance: new FormControl,
      SavingsAmount: new FormControl
    });
  }

  onSubmit() {
    console.log(this.budgetForm.value)
    this._budgetService.createBudget(this.budgetForm.value).subscribe(data => {
      this._router.navigate(['/budget']);
    });
  }
}
