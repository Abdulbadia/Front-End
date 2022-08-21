import { Component, OnInit } from '@angular/core';
//import { MessengerService } from '../MessengerServices/messenger.service';
import { ProductComponent } from '../product/product.component';
import { AddcartService } from '../../Services/addcart.service';
import { IProduct } from '../../modules/admin/Standers/iproduct';
import { Cartshow } from '../../Interfaces/cartshow';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  token=localStorage.getItem('token');
  showprod:IProduct[] ;
  sum:number=0;
  constructor( private AddcartService:AddcartService) {
    const cartobs={
      next:(data)=>{
      // alert(`item added successfully`);
      this.showprod=data;
      this.showprod.forEach((val)=>this.sum+=val.price)
      console.log(this.showprod);
      console.log(this.sum);
      },
      error:(err:Error)=>{
        // alert(`something wrong happened`);
        err.message}
    }
    if(this.token){
      this.AddcartService.getcartitems({token:this.token}).subscribe(cartobs);
    }
   }//private MSG:MessengerService

submit(){
  const addcartobs={
    next:(data)=>{
      // alert(`item added successfully`);
     alert("done Checkout")
    },
    error:(err:Error)=>{
      alert(`something wrong happened`);
      err.message}
    }
    this.AddcartService.checkout({token:this.token}).subscribe(addcartobs);
}

  ngOnInit(): void {

    // this.MSG.getMSG().subscribe()=>{
    // this.cartItems.push({
    //   ProductName:product.price
    // })


    // })
    //console.log(this.cartItems);
;


  }


}


function forEach(arg0: boolean) {
  throw new Error('Function not implemented.');
}

