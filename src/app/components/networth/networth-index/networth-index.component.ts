import { Component, OnInit } from '@angular/core';
import { NetWorthService } from '../../../services/networth.service';
import { NetWorth } from '../../models/NetWorth';
import { MatTableDataSource } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-networth-index',
  templateUrl: './networth-index.component.html',
  styleUrls: ['./networth-index.component.css']
})
export class NetworthIndexComponent implements OnInit {
  columnNames = ['TotalAssets', 'TotalLiabilities', 'TotalNetWorth','Details']
  dataSource: MatTableDataSource<NetWorth>

  NetWorthForm: FormGroup;
  constructor(private _netWorthService: NetWorthService, private _fb: FormBuilder) { }

  ngOnInit() {
    this.NetWorthForm = this._fb.group({
      SavingsAccount: "",
      CheckingAccount: "",
    });

    this.NetWorthForm.valueChanges.subscribe(console.log)
    this._netWorthService.getNetWorth().subscribe((netWorth: NetWorth[]) => {
      console.log(netWorth) 
      this.dataSource = new MatTableDataSource<NetWorth>(netWorth);   
    });
  }

}
