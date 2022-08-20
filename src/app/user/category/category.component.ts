import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductAPiService } from '../../modules/admin/Shared/product-api.service';
import { IProduct } from '../../modules/admin/Standers/iproduct';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
products:IProduct[];
  constructor(private Ser:ProductAPiService,private router:Router) {



    const observer={
      next:(data)=>{
    this.products=data;
    console.log(data);
      },
      error:(err:Error)=>{
        err.message}
      }
  this.Ser.get_AllProduct().subscribe(observer);

  }

  ngOnInit(): void {
  }

}
