import { Component, Input, OnInit } from '@angular/core';
//import { MessengerService } from '../MessengerServices/messenger.service';
import { ProductAPiService } from '../../modules/admin/Shared/product-api.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IProduct } from 'src/app/modules/admin/Standers/iproduct';
import { AddcartService } from '../../Services/addcart.service';
import { Icart } from '../../Interfaces/icart';

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
  token:string;
  id:number;
  Src:string="";
  itemstoadd:Icart;
  constructor(private PrdSer:ProductAPiService,private ActivatedRoute:ActivatedRoute,private addcartser:AddcartService) {
    this.ActivatedRoute.paramMap.subscribe((params:ParamMap)=>this.id=+(params.get('id')))
    this.token=localStorage.getItem('token');
    this.itemstoadd={
      token: this.token,
      prdId:this.id
    }
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

  };
  addToCart(){
    if(this.token){
      const itemstoaddobserver={
          next:(data)=>{
          alert(`item added successfully`);
          console.log(data);
          },
          error:(err:Error)=>{
            alert(`something wrong happened`);
            err.message}
        }
    this.addcartser.addtocart(this.itemstoadd).subscribe();
    console.log(localStorage.getItem('token'));
  }
    else{
      alert(`you should login first`);
    }
}
  ngOnInit(): void {
  }
  handleAddToCart(){

   // this.MSG.sendMSG(this.data)

    }
}
