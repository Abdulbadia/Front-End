import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductAPiService } from '../../modules/admin/Shared/product-api.service';
import { IProduct } from '../../modules/admin/Standers/iproduct';
import { CategoriesApiService } from '../../modules/admin/Shared/categories-api.service';
import { Categories } from '../../modules/admin/Standers/categories';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
products:IProduct[];
categories:Categories[] ;
category:string;
  constructor(private Ser:ProductAPiService,private router:Router,private catserv:CategoriesApiService) {
this.category="كل الاصناف";


    const prdobserver={
      next:(data)=>{
    this.products=data;
    console.log(data);
      },
      error:(err:Error)=>{
        err.message}
      }
    const catobserver={
      next:(data)=>{
    this.categories=data;
    console.log(data);
      },
      error:(err:Error)=>{
        err.message}
      }
  this.Ser.get_AllProduct().subscribe(prdobserver);
  this.catserv.get_AllCata().subscribe(catobserver);

  }

  ngOnInit(): void {
  }

}
