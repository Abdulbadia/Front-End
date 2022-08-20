import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthenticationService } from './Services/authentication.service';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
constructor(private Authservice:AuthenticationService)
{  if(localStorage.getItem('token')){
  const observer={
    next:(data)=>{
  this.Authservice.setType(data.type);
  // console.log(data)
    },
    error:(err:Error)=>{
      console.log("failed")

    }
    }
  this.Authservice.checkBEAdmin(localStorage.getItem('token')).subscribe(observer);
}}

}


