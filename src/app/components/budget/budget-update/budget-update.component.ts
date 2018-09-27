import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../../../services/budget.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budget-update',
  templateUrl: './budget-update.component.html',
  styleUrls: ['./budget-update.component.css']
})
export class BudgetUpdateComponent implements OnInit {

  budgetForm: FormGroup;

  constructor(private _budgetService: BudgetService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm (){
  this.budgetForm = this._form.group({
    MonthlyIncome: new FormControl,
    EstimatedAvailableBalance: new FormControl,
    SavingsAmount: new FormControl
  });
}
  onSubmit() {
    this._budgetService.createBudget(this.budgetForm.value).subscribe(data => {
      this._router.navigate(['/budget']);
    });
  }
}
