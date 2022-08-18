import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiBrandService } from '../../Shared/api-brand.service';
import { CategoriesApiService } from '../../Shared/categories-api.service';
import { ProductAPiService } from '../../Shared/product-api.service';
import { Categories } from '../../Standers/categories';
import { IBrand } from '../../Standers/ibrand';
import { IProduct } from '../../Standers/iproduct';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  constructor(private ser: ProductAPiService, private router: Router,
    private Active: ActivatedRoute, private _Catalog: CategoriesApiService, private _Braid: ApiBrandService, private _Location: Location) { }
  Brand: IBrand[];
   Categorie: Categories[];
  product!: IProduct;

  ngOnInit(): void {
    this.getProduct();
    this.get_AllBrandIds();
    this.get_AllCata();
  }
  getProduct(): void {
    const product_code = Number(this.Active.snapshot.paramMap.get('id'));
    this.ser.get_productByID(product_code)
      .subscribe(product => this.product = product);
  }
  goBack(): void {
    this._Location.back();
  }

  save(id:number): void {
    this.ser.Edit_product_edit(id, this.product).subscribe(product => this.goBack())
  }
  get_AllBrandIds() {
    return this._Braid.get_AllBrandIds().subscribe(data => {
      this.Brand = data;
    })
  }
  get_AllCata() {
    return this._Catalog.get_AllCata().subscribe(data => {
      this.Categorie = data;
    })
   }
}




  // get_ProductbyID(id: number) {
  //   return this.ser.get_productByID(id).subscribe(data => {
  //     this.product = data;
  //   })
  // }
  


  // Updata_product() {
  //   return this.ser.Edit_product_edit(this.id, this.body).subscribe(data => {
  //     console.log(data);
  //   })
  // }

    //   this.get_ProductbyID(this.id);
    //   this.get_AllCata();
    //   this.get_AllBrandIds();
