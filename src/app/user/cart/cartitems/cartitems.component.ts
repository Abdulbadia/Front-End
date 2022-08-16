import { Component, Input, OnInit } from '@angular/core';
import { CartComponent } from '../cart.component';

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styleUrls: ['./cartitems.component.scss']
})
export class CartitemsComponent implements OnInit {
  i=0
  @Input() cartItems :any

  constructor() { }

  ngOnInit(): void {
  

  }


  }


