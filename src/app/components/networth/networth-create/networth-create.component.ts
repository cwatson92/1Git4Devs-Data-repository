import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl } from '@angular/forms';
import { NetWorthService } from '../../../services/networth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-networth-create',
  templateUrl: './networth-create.component.html',
  styleUrls: ['./networth-create.component.css']
})
export class NetworthCreateComponent implements OnInit {
   
  netWorthForm: FormGroup;

  constructor(private _netWorthService: NetWorthService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.netWorthForm = this._form.group({
      SavingsAccount: new FormControl,
      CheckingAccount: new FormControl,
      MoneyMarketAccount: new FormControl,
      SavingsBonds: new FormControl,
      CertificateOfDeposits: new FormControl,
      IRA: new FormControl,
      RothIRA: new FormControl,
      Retirement401K: new FormControl,
      SepIRA: new FormControl,
      Pension: new FormControl,
      Annuity: new FormControl,
      RealEstate: new FormControl,
      PrincipleHome: new FormControl,
      VacationHome: new FormControl,
      CarsTrucksBoats: new FormControl,
      HomeFurnishings: new FormControl,
      OtherAssets: new FormControl,
      CreditCardBalance: new FormControl,
      EstimatedIncomeTaxOwed: new FormControl,
      OtherOutstandingBills: new FormControl,
      HomeMortgage: new FormControl,
      HomeEquityLoan: new FormControl,
      MortgagesOnRentals: new FormControl,
      CarLoans: new FormControl,
      StudentLoans: new FormControl,
      LifeInsurancePolicyLoans: new FormControl,
      OtherLongTermDebt: new FormControl,
    });
  }

  onSubmit() {
    this._netWorthService.createNetWorth(this.netWorthForm.value).subscribe(data => {
      this._router.navigate(['/netWorth']);
    })
  }

}
