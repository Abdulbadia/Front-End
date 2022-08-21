import { Component, OnInit } from '@angular/core';
//import { ServicesService } from '../../maincomponents/home/services/services.service';
import { ProductComponent } from 'src/app/user/product/product.component';
import { ServicesService } from './Service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Products:any[]=[]
  // Category:any[]=[];
  // selectedCatId:number=0;
  // ProdListToholdFliteredItems:any[]=[]
  // loader:boolean=false


//private service:ServicesService
  constructor(private service:ServicesService) { }

  ngOnInit(): void {
    // this.getProducts()
    // this.getCategory()
  }

  // getProducts(){
  //   this.loader =true

  //   this.service.GetAllProducts().subscribe((result:any)=>{
  //     this.loader =false
  //     console.log(result);
  //     this.Products=result

  //   },error =>{
  //     this.loader=false
  //     alert("error")
  //   })
  // }

  getCategory(){
    // this.loader=true

    // this.service.GetAllprdicusByCat().subscribe((result:any)=>{
    //   this.loader=false

    //   console.log(result);
    //   this.Category=result

    // },error =>{
    //   this.loader=false
    //   alert("cat")
    // })
  }
  // GetAllProductsByCtegoryByID(keyword:string){
  //   this.loader =true
  //   this.service.GetAllProductsByCtegoryByID(keyword).subscribe((res:any)=>{
  //     this.Products =res;
  //     this.loader=false

  //   })

  // }
//   filterCategory(event:any){
//      let value = event.target.value
//      if(value=='all')
//      this.getProducts()
//      else{
//       this.GetAllProductsByCtegoryByID(value)

//      }

// }


}
