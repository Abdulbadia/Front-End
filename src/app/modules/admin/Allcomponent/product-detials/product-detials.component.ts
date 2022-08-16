import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductAPiService } from '../../Shared/product-api.service';
import { Location } from '@angular/common';
import { IProduct } from '../../Standers/iproduct';
@Component({
  selector: 'app-product-detials',
  templateUrl: './product-detials.component.html',
  styleUrls: ['./product-detials.component.scss']
})
export class ProductDetialsComponent implements OnInit {

  constructor(private Ser: ProductAPiService, private _Router: ActivatedRoute, private _location: Location) { }
  Cratproduct: IProduct;
  prdId = this._Router.snapshot.params['id'];
  ngOnInit(): void {
    this.get_productByID(this.prdId);
  }
  get_productByID(id) {
    return this.Ser.get_productByID(id).subscribe(data => {
      this.Cratproduct = data;
    })
  }
  Myback() {
    this._location.back();
  }
  total: number;
  TotalPrice() {
    this.total = this.Cratproduct.price - (this.Cratproduct.price * this.Cratproduct.discountPercentage);
    console.log(this.total);
    return this.total;
  }

}
