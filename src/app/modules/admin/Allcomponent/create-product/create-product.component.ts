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
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreatePRoductComponent implements OnInit {

  constructor(private api_Ser: ProductAPiService, private Cat_Api: CategoriesApiService,
    private _router: Router, private Bra_APi: ApiBrandService, private fb: FormBuilder,
    private _Active: ActivatedRoute) {
  }
  FormProduct: FormGroup;
  product: IProduct = {} as IProduct;
  Categorie: Categories[] = [];
  Brand: IBrand[] = [];
  id: number;
  ngOnInit(): void {
    this.get_Categories();
    this.get_AllBrandIds();
    this.id = this._Active.snapshot.params['id'];
    this.FormProduct = this.fb.group({
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
    return this.FormProduct.get('name');
  }
  get imageFile() {
    return this.FormProduct.get('imageFile');
  }
  get description() {
    return this.FormProduct.get('description');
  }
  get categoryId() {
    return this.FormProduct.get('categoryId');
  }
  get price() {
    return this.FormProduct.get('price');
  }
  get quantity() {
    return this.FormProduct.get('quantity');
  }
  get brandID() {
    return this.FormProduct.get('brandID');
  }
  get availability() {
    return this.FormProduct.get('availability');
  }
  get discountPercentage() {
    return this.FormProduct.get('discountPercentage');
  }
  uploadFile(event) {
    const files = event.target.files[0];
    this.FormProduct.get('imageFile').setValue(files);
  }

  submitForm() {
    var formData: any = new FormData();;
    formData.append("name", this.FormProduct.get('name').value);
    formData.append("imageFile", this.FormProduct.get('imageFile').value);
    formData.append("description", this.FormProduct.get('description').value);
    formData.append("categoryId", this.FormProduct.get('categoryId').value);
    formData.append("price", this.FormProduct.get('price').value);
    formData.append("quantity", this.FormProduct.get('quantity').value);
    formData.append("brandID", this.FormProduct.get('brandID').value);
    formData.append("availability", this.FormProduct.get('availability').value);
    formData.append("discountPercentage", this.FormProduct.get('discountPercentage').value);
    console.log(formData);
    console.log(this.FormProduct);
    this.api_Ser.Create_product(formData).subscribe(data => {
      console.log(data);
      this._router.navigateByUrl('/Admin/products');
    })
  }
  get_Categories() {
    return this.Cat_Api.get_AllCata().subscribe(data => {
      this.Categorie = data;
    });
  }

  get_AllBrandIds() {
    return this.Bra_APi.get_AllBrandIds().subscribe(data => {
      this.Brand = data;

      console.log(this.Brand);
    })
  }




}






// onfileSelected(event) {
  //   this.product.imageFile = <File>event.target.files[0];
  // }

  // addproduct() {
  //   const Myobservable =
  //   {
  //     next: (product: IProduct) => {
  //       alert("product Success!");
  //       this._router.navigateByUrl('/Admin/products');
  //     },
  //     error: (error: Error) => { console.log(error); }
  //   }


  //   this.product.brandID = Number(this.product.brandID);
  //   this.product.categoryId = Number(this.product.categoryId);
  //   this.product.availability ? (this.product.availability = true) : (this.product.availability = false)
  //   return this.api_Ser.Create_product(this.product).subscribe(Myobservable);
  // }