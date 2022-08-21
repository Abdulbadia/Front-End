import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersApiService } from '../../Shared/orders-api.service';
import { Location } from '@angular/common';
import { OrdersDetaials } from '../../Standers/orders-detaials';

@Component({
  selector: 'app-orders-detailes',
  templateUrl: './orders-detailes.component.html',
  styleUrls: ['./orders-detailes.component.scss']
})
export class OrdersDetailesComponent implements OnInit {

  constructor(private _Apiorders: OrdersApiService, private _Router: ActivatedRoute,
    private _location: Location) { }
  ordersID = this._Router.snapshot.params['id'];
  _orders: OrdersDetaials[];

  ngOnInit(): void {
    this.getordersbyID(this.ordersID);
  }
  Myback() {
    this._location.back();
  }
  getordersbyID(id) {
    return this._Apiorders.get_ordersDetaielsByID(id).subscribe(data => {
      this._orders = data;
      console.log(this._orders);
    })
  }

}



