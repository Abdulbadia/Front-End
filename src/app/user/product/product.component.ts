import { Component, Input, OnInit } from '@angular/core';
//import { MessengerService } from '../MessengerServices/messenger.service';
import { ProductAPiService } from '../../modules/admin/Shared/product-api.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IProduct } from 'src/app/modules/admin/Standers/iproduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product:IProduct={
    name: '',
    image: '',
    description: '',
    category: '',
    categoryId: 0,
    brand: '',
    price: 0,
    quantity: 0,
    brandID: 0,
    availability: false,
    discountPercentage: 0
  }
  @Input() data:any={}
  id:number;
  Src:string="";
  constructor(private PrdSer:ProductAPiService,private ActivatedRoute:ActivatedRoute) {
    this.ActivatedRoute.paramMap.subscribe((params:ParamMap)=>this.id=+(params.get('id')))
    // console.log(this.id)
    const prdobserver={
      next:(data)=>{
    this.product=data;
    this.Src=data.imageSrc;
    console.log(data);
      },
      error:(err:Error)=>{
        err.message}
      }
    this.PrdSer.get_productByID(this.id).subscribe(prdobserver);

  }//private MSG:MessengerService

  ngOnInit(): void {
  }
  handleAddToCart(){

   // this.MSG.sendMSG(this.data)

    }
}
