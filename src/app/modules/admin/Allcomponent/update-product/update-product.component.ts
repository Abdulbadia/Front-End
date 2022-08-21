import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private Active: ActivatedRoute, private _Catalog: CategoriesApiService, private _Braid: ApiBrandService, private _Location: Location, private _fb: FormBuilder) { }
  Brand: IBrand[];
  Categorie: Categories[];
  Editfrom: FormGroup;
  id: number;
  ngOnInit(): void {
    this.id = Number(this.Active.snapshot.paramMap.get('id'));
    this.ser.get_productByID(this.id)
      .subscribe(x => this.Editfrom.patchValue(x));
    this.get_AllBrandIds();
    this.get_AllCata();
    this.Editfrom = this._fb.group({
      name: ['', Validators.required],
      imageFile: ['', Validators.required],
      description: ['', Validators.required],
      categoryId: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      brandID: ['', Validators.required],
      availability: ['', Validators.required],
      discountPercentage: ['', Validators.required]
    })

  }

  get name() {
    return this.Editfrom.get('name');
  }
  get imageFile() {
    return this.Editfrom.get('imageFile');
  }
  get description() {
    return this.Editfrom.get('description');
  }
  get categoryId() {
    return this.Editfrom.get('categoryId');
  }
  get price() {
    return this.Editfrom.get('price');
  }
  get quantity() {
    return this.Editfrom.get('quantity');
  }
  get brandID() {
    return this.Editfrom.get('brandID');
  }
  get availability() {
    return this.Editfrom.get('availability');
  }
  get discountPercentage() {
    return this.Editfrom.get('discountPercentage');
  }
  uploadFile(event) {
    const files = event.target.files[0];
    this.Editfrom.get('imageFile').setValue(files);
  }

  goBack(): void {
    this._Location.back();
  }

  updateFroms() {

    var formData: any = new FormData();;
    formData.append("name", this.Editfrom.get('name').value);
    formData.append("imageFile", this.Editfrom.get('imageFile').value);
    formData.append("description", this.Editfrom.get('description').value);
    formData.append("categoryId", this.Editfrom.get('categoryId').value);
    formData.append("price", this.Editfrom.get('price').value);
    formData.append("quantity", this.Editfrom.get('quantity').value);
    formData.append("brandID", this.Editfrom.get('brandID').value);
    formData.append("availability", this.Editfrom.get('availability').value);
    formData.append("discountPercentage", this.Editfrom.get('discountPercentage').value);

    this.ser.Edit_product_edit(this.id, formData).subscribe(data => {
      this.goBack()
    })
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































  // save(id: number): void {
  //   this.product.brandID = Number(this.product.brandID);
  //   this.product.categoryId = Number(this.product.categoryId);
  //   this.product.availability ? (this.product.availability = true) : (this.product.availability = false)
  //   this.ser.Edit_product_edit(id, this.product).subscribe(product => this.goBack())
  // }

  // getProduct(): void {
  //   const product_code = Number(this.Active.snapshot.paramMap.get('id'));
  //   this.ser.get_productByID(product_code)
  //     .subscribe(product => this.product = product);
  // }