import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OrdersApiService } from '../../Shared/orders-api.service';
import { Orders } from '../../Standers/orders';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss']
})
export class AllOrdersComponent implements OnInit {

  constructor(private _orders: OrdersApiService) { }
  dataSource;
  displayedColumns: string[] =
    ['id', 'date', 'username', 'Action'];
  ngOnInit(): void {
    this.get_Allorders();
  }

  get_Allorders() {
    return this._orders.getAllorders().subscribe(data => {
      this.dataSource = new MatTableDataSource<Orders>(data);
      console.log(this.dataSource)
    })
  }
  DeletedMyorders(id: number) {
    if (window.confirm("'Are you sure you want to delete ")) {
      this._orders.Delete_Order(id).subscribe(data => {
        return this.get_Allorders();
      })
    }
  }
}
