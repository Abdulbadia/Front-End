import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError, Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iuser } from '../Interfaces/iuser';
import { Ilogin } from '../Interfaces/ilogin';
import { Irespond } from '../Interfaces/irespond';
import { Icart } from '../Interfaces/icart';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isLoggedSubject:BehaviorSubject<boolean>;
  private type:string;
httpoptions;
objtosend:Icart;
  constructor(private httpclient:HttpClient) {
    this.isLoggedSubject =new BehaviorSubject<boolean>((localStorage.getItem("token"))?true:false);
    this.httpoptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
      //  'Authorization': 'my-auth-token'
      })
    }
  }

  register(user:Iuser)
  {
   let a= this.httpclient.post(`${environment.APIURL}/api/users/Register`,JSON.stringify(user),this.httpoptions).pipe(catchError(this.handleError));
   //console.log(a);
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
  private HHandleError(error:HttpErrorResponse){
    // console.log(error)
    if(error.status===0){
      console.log('An error occured:',error.error)
    }
    else{console.log(error.status);
      console.log(`Backend returne code ${JSON.stringify( error.error) }`,`body is:`,error.error);}
    return throwError(()=>new Error('Error occured please try again'))
  }
Login(user:Ilogin){
  this.isLoggedSubject.next(true);
  let a= this.httpclient.post(`${environment.APIURL}/api/users/Login`,JSON.stringify(user),this.httpoptions).pipe(catchError(this.handleError));
  console.log(a);
  return a;
}
logout(){
localStorage.removeItem('token');
this.type="user";
this.isLoggedSubject.next(false);

localStorage.removeItem('fullname');
}
get isUserLogged():boolean
{
return (localStorage.getItem("token"))?true:false
}
setType(type:string){
  this.type=type;
  console.log(this.isAdmin)
  }
   get isAdmin():boolean
  {
    // console.log(this.isAdmin);
  return (this.type=="admin"?true:false)
  }
  getLoggedStatus(){

    return this.isLoggedSubject.asObservable();
  }
  checkBEAdmin(token:string){

   this.objtosend={token:token}
   return this.httpclient.post(`${environment.APIURL}/api/users/usertoken`,JSON.stringify(this.objtosend),this.httpoptions).pipe(catchError(this.HHandleError))
  }

}
