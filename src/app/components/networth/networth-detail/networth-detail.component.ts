import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NetWorthService } from '../../../services/networth.service';
import { NetWorth } from '../../models/NetWorth';

@Component({
  selector: 'app-networth-detail',
  templateUrl: './networth-detail.component.html',
  styleUrls: ['./networth-detail.component.css']
})
export class NetworthDetailComponent implements OnInit {

  netWorth: NetWorth;

  constructor(private _activatedRoute: ActivatedRoute, private _netWothService: NetWorthService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._netWothService.getNetWorthDetails(routeData.get('id')).subscribe((netWorth: NetWorth) => {
        this.netWorth = netWorth;
      })
      console.log(routeData);
    })
  }

}
