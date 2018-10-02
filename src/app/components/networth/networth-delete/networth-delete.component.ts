import { Component, OnInit } from '@angular/core';
import { NetWorthService } from '../../../services/networth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NetWorth } from '../../models/NetWorth';

@Component({
  selector: 'app-networth-delete',
  templateUrl: './networth-delete.component.html',
  styleUrls: ['./networth-delete.component.css']
})
export class NetworthDeleteComponent implements OnInit {
  networth: any;

  constructor(private _networthService : NetWorthService,
    private _ar: ActivatedRoute,
    private _router: Router) {
      this._ar.paramMap.subscribe(p =>{
        this._networthService.getNetWorthDetails(p.get('id')).subscribe((singleNetworth: NetWorth) => {
          this.networth = singleNetworth
        });
      });
     }

  ngOnInit() {
  }

  onDelete(){
    this._networthService.deleteNetWorth(this.networth.NetWorthId).subscribe(() => {
      this._router.navigate(['/networth']);
    });
  }
}