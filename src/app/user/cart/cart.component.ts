import { Component, OnInit } from '@angular/core';
//import { MessengerService } from '../MessengerServices/messenger.service';
import { ProductComponent } from '../product/product.component';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartTotalAmount=0;
  title:string="mohamed"
  cartItems:any[]=[
    {id:1,proid:1,qty:4,price:500},
    {id:1,proid:1,qty:4,price:500},
    {id:1,proid:1,qty:4,price:500},
    {id:1,proid:1,qty:4,price:500},
    {id:1,proid:1,qty:4,price:500},
    {id:1,proid:1,qty:4,price:500},
  ];
  usrl:string
  constructor() { }//private MSG:MessengerService



  ngOnInit(): void {

    // this.MSG.getMSG().subscribe()=>{
    // this.cartItems.push({
    //   ProductName:product.price
    // })
    
      
    // })
    //console.log(this.cartItems);
    this.cartItems.forEach(element => {
      this.cartTotalAmount += element.price *element.qty
    
      
    });


  }
  

}


