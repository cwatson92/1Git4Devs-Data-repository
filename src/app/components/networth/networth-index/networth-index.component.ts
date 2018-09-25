import { Component, OnInit } from '@angular/core';
import { NetWorthService } from '../../../services/networth.service';
import { NetWorth } from '../../models/NetWorth';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-networth-index',
  templateUrl: './networth-index.component.html',
  styleUrls: ['./networth-index.component.css']
})
export class NetworthIndexComponent implements OnInit {
  columnNames = ['TotalAssets', 'TotalLiabilities', 'TotalNetWorth']
  dataSource: MatTableDataSource<NetWorth>

  constructor(private _netWorthService: NetWorthService) { }

  ngOnInit() {
    this._netWorthService.getNetWorth().subscribe((netWorth: NetWorth[]) => { 
      this.dataSource = new MatTableDataSource<NetWorth>(netWorth);   
    });
  }

}
