import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { stringify } from 'querystring';
import { Ilogin } from '../../../Interfaces/ilogin';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../Services/authentication.service';

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

const observer={
  next:()=>{alert("login successfully");
  this.router.navigate([""])
  },
  error:(err:Error)=>{err.message}
  }
  this.AuthenticationService.Login(user).subscribe(observer);

  }
  ngOnInit(): void {
  }
  toggleFieldTextType(){
    this.fieldTextType = !this.fieldTextType;
  }


}
