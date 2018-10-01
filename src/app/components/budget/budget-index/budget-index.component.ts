import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../../../services/budget.service';
import { Budget } from '../../models/Budget';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-budget-index',
  templateUrl: './budget-index.component.html',
  styleUrls: ['./budget-index.component.css']
})
export class BudgetIndexComponent implements OnInit {
  columnNames = ['MonthlyIncome','EstimatedAvailableBalance','SavingsAmount', 'Delete' ,'Details'] 
  dataSource: MatTableDataSource<Budget>;
  
  constructor(private _budgetService: BudgetService) { }

  ngOnInit() {
    this._budgetService.getBudget().subscribe((budget: Budget[]) => {
      console.log(budget);
      this.dataSource = new MatTableDataSource<Budget>(budget);
    });
  }
}

