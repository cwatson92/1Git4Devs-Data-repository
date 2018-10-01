import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BudgetService } from '../../../services/budget.service';
import { Budget } from '../../models/Budget';

@Component({
  selector: 'app-budget-detail',
  templateUrl: './budget-detail.component.html',
  styleUrls: ['./budget-detail.component.css']
})
export class BudgetDetailComponent implements OnInit {

  budget: Budget;

  constructor(private _activatedRoute: ActivatedRoute, private _budgetService: BudgetService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(p => {
      this._budgetService.getSingleBudget(p.get('id')).subscribe((singleBudget: Budget) => {
        this.budget = singleBudget;
      });
    });
  }

}
