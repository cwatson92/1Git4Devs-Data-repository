import { Component, OnInit } from '@angular/core';
import { NetWorth } from '../../models/NetWorth';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NetWorthService } from '../../../services/networth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-networth-edit',
  templateUrl: './networth-edit.component.html',
  styleUrls: ['./networth-edit.component.css']
})
export class NetworthEditComponent implements OnInit {

  netWorth: NetWorth;

  editNetWorthForm: FormGroup;
  constructor(private _form: FormBuilder,
              private _netWorthService: NetWorthService,
              private _ar: ActivatedRoute,
              private _router: Router) {
                
                this._ar.paramMap.subscribe(p => {
                  this._netWorthService.getNetWorthDetails(p.get('id')).subscribe((singleNetWorth: NetWorth) => {
                    console.log();
                  })
                })
               }

  ngOnInit() {
  }

}
