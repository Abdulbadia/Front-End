import { Component, Input, OnInit } from '@angular/core';
//import { MessengerService } from '../MessengerServices/messenger.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
<<<<<<< Updated upstream
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
    discountPercentage: 0,
  }
=======
>>>>>>> Stashed changes
  @Input() data:any={}

<<<<<<< Updated upstream
  };
  addToCart(){
    console.log('sending data');
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
        this.addcartser.addtocart(this.itemstoadd).subscribe(itemstoaddobserver);
        console.log(localStorage.getItem('token'));
  }
    else{
      alert(`you should login first`);
    }
}
=======
  constructor() { }//private MSG:MessengerService

>>>>>>> Stashed changes
  ngOnInit(): void {
  }
  handleAddToCart(){

   // this.MSG.sendMSG(this.data)
      
    }
}
