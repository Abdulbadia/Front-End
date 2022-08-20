import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Icart } from '../Interfaces/icart';
import { environment } from 'src/environments/environment';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddcartService {
  httpoptions;
  constructor(private HttpClient:HttpClient) {
    this.httpoptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
      //  'Authorization': 'my-auth-token'
      })
    }

   }
   addtocart(cartdetails:Icart){
    let a= this.HttpClient.post(`${environment.APIURL}/api/CartItems/AddToCart`,JSON.stringify(cartdetails),this.httpoptions).pipe(catchError(this.handleError));

    return a;
   }
    // editquantity(cartdetails:Icart){
    //   let a= this.HttpClient.post(`${environment.APIURL}/api/  `,JSON.stringify(cartdetails),this.httpoptions).pipe(catchError(this.handleError));

    //   return a;
    // }
    // checkout(cartdetails:Icart){
    //   let a= this.HttpClient.post(`${environment.APIURL}/api/  `,JSON.stringify(cartdetails),this.httpoptions).pipe(catchError(this.handleError));

    //   return a;
    // }
    // updatecart(){}
    private handleError(error:HttpErrorResponse){
    // console.log(error)
    if(error.status===0){
      console.error('An error occured:',error.error)
    }
    else{console.log(error.status);
      console.error(`Backend returne code ${JSON.stringify( error.error) }`,`body is:`,error.error);}
    return throwError(()=>new Error('Error occured please try again'))
  }

}
