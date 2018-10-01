import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../../../services/budget.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Budget } from '../../models/Budget';

@Component({
  selector: 'app-budget-delete',
  templateUrl: './budget-delete.component.html',
  styleUrls: ['./budget-delete.component.css']
})
export class BudgetDeleteComponent implements OnInit {
  budget: any;

  constructor(private _budgetService: BudgetService,
    private _ar: ActivatedRoute,
    private _router: Router) {
      this._ar.paramMap.subscribe(p => {
        this._budgetService.getSingleBudget(p.get('id')).subscribe((singleBudget: Budget) => {
          this.budget = singleBudget
        });
      });
     }

  ngOnInit() {
  }

  onDelete(){
    this._budgetService.deleteBudget(this.budget.BudgetId).subscribe(() => {
      this._router.navigate(['/budget']);
    });
  }
}


