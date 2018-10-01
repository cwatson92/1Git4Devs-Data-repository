import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { NetWorthService } from '../../../services/networth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-networth-create',
  templateUrl: './networth-create.component.html',
  styleUrls: ['./networth-create.component.css']
})
export class NetworthCreateComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;
  seventhFormGroup: FormGroup;
  eighthFormGroup: FormGroup;
  ninthFormGroup: FormGroup;
  tenthFormGroup: FormGroup;
  eleventhFormGroup: FormGroup;
  twelfthFormGroup: FormGroup;
  thirteenFormGroup: FormGroup;
  fourteenFormGroup: FormGroup;
  fifteenFormGroup: FormGroup;
  sixteenFormGroup: FormGroup;
  seventeenFormGroup: FormGroup;
  eighteenFormGroup: FormGroup;
  nineteenFormGroup: FormGroup;
  twentiethFormGroup: FormGroup;
  twentyFirstFormGroup: FormGroup;
  twentySecondFormGroup: FormGroup;
  twentyThirdFormGroup: FormGroup;
  twentyFourthFormGroup: FormGroup;
  twentyFifthFormGroup: FormGroup;
  twentySixthFormGroup: FormGroup;
  twentySeventhFormGroup: FormGroup;
   
  netWorthForm: FormGroup;

  constructor(private _netWorthService: NetWorthService,private _form: FormBuilder, private _formBuilder: FormBuilder, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
    this.firstFormGroup = this. _formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this. _formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this. _formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this. _formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this. _formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
    this.sixthFormGroup = this. _formBuilder.group({
      sixthCtrl: ['', Validators.required]
    });
    this.seventhFormGroup = this. _formBuilder.group({
      seventhCtrl: ['', Validators.required]
    });
    this.eighthFormGroup = this. _formBuilder.group({
      eighthCtrl: ['', Validators.required]
    });
    this.ninthFormGroup = this. _formBuilder.group({
      ninthCtrl: ['', Validators.required]
    });
    this.tenthFormGroup = this. _formBuilder.group({
      tenthCtrl: ['', Validators.required]
    });
    this.eleventhFormGroup = this. _formBuilder.group({
      eleventhCtrl: ['', Validators.required]
    });
    this.twelfthFormGroup = this. _formBuilder.group({
      twelfthCtrl: ['', Validators.required]
    });
    this.thirteenFormGroup = this. _formBuilder.group({
      thirteenCtrl: ['', Validators.required]
    });
    this.fourteenFormGroup = this. _formBuilder.group({
      fourteenCtrl: ['', Validators.required]
    });
    this.fifteenFormGroup = this. _formBuilder.group({
      fifteenCtrl: ['', Validators.required]
    });
    this.sixteenFormGroup = this. _formBuilder.group({
      sixteenCtrl: ['', Validators.required]
    });
    this.seventeenFormGroup = this. _formBuilder.group({
      seventeenCtrl: ['', Validators.required]
    });
    this.eighteenFormGroup = this. _formBuilder.group({
      eighteenCtrl: ['', Validators.required]
    });
    this.nineteenFormGroup = this. _formBuilder.group({
      nineteenCtrl: ['', Validators.required]
    });
    this.twentiethFormGroup = this. _formBuilder.group({
      twentiethCtrl: ['', Validators.required]
    });
    this.twentyFirstFormGroup = this. _formBuilder.group({
      twentyFirstCtrl: ['', Validators.required]
    });
    this.twentySecondFormGroup = this. _formBuilder.group({
      twentySecondCtrl: ['', Validators.required]
    });
    this.twentyThirdFormGroup = this. _formBuilder.group({
      twentyThirdCtrl: ['', Validators.required]
    });
    this.twentyFourthFormGroup = this. _formBuilder.group({
      twentyFourthCtrl: ['', Validators.required]
    });
    this.twentyFifthFormGroup = this. _formBuilder.group({
      twentyFifthCtrl: ['', Validators.required]
    });
    this.twentySixthFormGroup = this. _formBuilder.group({
      twentySixthCtrl: ['', Validators.required]
    });
    this.twentySeventhFormGroup = this. _formBuilder.group({
      twentySeventhCtrl: ['', Validators.required]
    });

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
