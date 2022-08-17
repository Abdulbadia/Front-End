import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iuser } from '../Interfaces/iuser';
import { Ilogin } from '../Interfaces/ilogin';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
httpoptions;
  constructor(private httpclient:HttpClient) {
    this.httpoptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
      //  'Authorization': 'my-auth-token'
      })
    }
  }

  register(user:Iuser)
  {
   let a= this.httpclient.post(`${environment.APIURL}/api/Account/Register`,JSON.stringify(user),this.httpoptions).pipe(catchError(this.handleError));
   console.log(a);
   return a;
  }
  private handleError(error:HttpErrorResponse){
    // console.log(error)
    if(error.status===0){
      console.error('An error occured:',error.error)
    }
    else{console.log(error.status);
      console.error(`Backend returne code ${JSON.stringify( error.error) }`,`body is:`,error.error);}
    return throwError(()=>new Error('Error occured please try again'))
  }
Login(user:Ilogin){

  let a= this.httpclient.post(`${environment.APIURL}/api/Account/Login`,JSON.stringify(user),this.httpoptions).pipe(catchError(this.handleError));
  console.log(a);
  return a;
}

}
