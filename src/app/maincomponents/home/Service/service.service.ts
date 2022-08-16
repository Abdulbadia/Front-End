import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

 
  constructor(private http:HttpClient) { }

  GetAllProducts() {
   
    return this.http.get(environment.baseApi +'products')
  }
  GetAllprdicusByCat(){
    return this.http.get(environment.baseApi +'products/categories')

  }
  GetAllProductsByCtegoryByID(keyword:any){
    return this.http.get(environment.baseApi +'products/category/'+keyword )

  }
  
}
