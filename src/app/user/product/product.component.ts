import { Component, Input, OnInit } from '@angular/core';
//import { MessengerService } from '../MessengerServices/messenger.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() data:any={}

  constructor() { }//private MSG:MessengerService

  ngOnInit(): void {
  }
  handleAddToCart(){

   // this.MSG.sendMSG(this.data)
      
    }
}
