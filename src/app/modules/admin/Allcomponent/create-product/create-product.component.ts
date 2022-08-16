import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiBrandService } from '../../Shared/api-brand.service';
import { CategoriesApiService } from '../../Shared/categories-api.service';
import { ProductAPiService } from '../../Shared/product-api.service';
import { Categories } from '../../Standers/categories';
import { IBrand } from '../../Standers/ibrand';
import { IProduct } from '../../Standers/iproduct';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreatePRoductComponent implements OnInit {
  constructor(private api_Ser: ProductAPiService, private Cat_Api: CategoriesApiService,
    private _router: Router, private Bra_APi: ApiBrandService) {
  }

  product: IProduct = {} as IProduct;
  Categorie: Categories[] = [];
  Brand: IBrand[] = [];

  ngOnInit(): void {

    this.get_Categories();
    this.get_AllBrandIds();
  }
  addproduct() {
    const Myobservable =
    {
      next: (product: IProduct) => {
        alert("product Success!");
        console.log(product)
        this._router.navigateByUrl('/Admin/products');
      },
      error: (error: Error) => { console.log(error) }
    }
    return this.api_Ser.Create_product(this.product).subscribe(Myobservable);
  }

  get_Categories() {
    return this.Cat_Api.get_AllCata().subscribe(data => {
      this.Categorie = data;
    });
  }

  get_AllBrandIds() {
    return this.Bra_APi.get_AllBrandIds().subscribe(data => {
      this.Brand = data;
    })
  }


  updata_Product(id: number, body: IProduct) {
    return this.api_Ser.Edit_product_edit(id, body).subscribe(data => {
      console.log(data);
    })

  }
}
