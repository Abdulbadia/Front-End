import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { stringify } from 'querystring';
import { Ilogin } from '../../../Interfaces/ilogin';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../Services/authentication.service';
import { Irespond } from '../../../Interfaces/irespond';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  fieldTextType:boolean=false;
get username(){
  return this.userRegfrm.get('username');
}
get password(){
  return this.userRegfrm.get('password');
}
userRegfrm:FormGroup;
  constructor(private fb:FormBuilder,private router:Router,private AuthenticationService:AuthenticationService) {
    this.userRegfrm=fb.group({
      password:['',Validators.required],
      username:['',Validators.required],
    })
  }
  submit(){

      console.log('submit');
      let user:Ilogin={
        email:this.username.value,
        password:this.password.value
      }
let respond:Irespond;
const observer={
  next:(respond)=>{
    console.log(respond);
    console.log(respond.token);
    localStorage.setItem("token",respond.token);
    alert(`login successfully as ${respond.type}`);
    this.AuthenticationService.setType(respond.type);
    respond.type=="admin"?this.router.navigate(["Admin/products"]):this.router.navigate([""])
  },
  error:(err:Error)=>{
    alert(`something wrong happened`);
    err.message}
  }
  this.AuthenticationService.Login(user).subscribe(observer);

  }
  ngOnInit(): void {
  }
  toggleFieldTextType(){
    this.fieldTextType = !this.fieldTextType;
  }


}
