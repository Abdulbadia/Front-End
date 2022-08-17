import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, AfterViewInit } from '@angular/core';
// import { EventEmitter } from 'stream';
import { AuthenticationService } from '../../Services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,AfterViewInit {
@Output() childEvent=new EventEmitter();
@ViewChild('navv') el: ElementRef ;
  constructor(private AuthenticationService:AuthenticationService,private router :Router) { }

  loginshowandhide={"d-lg-none":this.AuthenticationService.isUserLogged,
  "d-lg-inline-block":!(this.AuthenticationService.isUserLogged)
}

logoutshowandhide={"d-lg-none":!(this.AuthenticationService.isUserLogged),
"d-lg-inline-block":this.AuthenticationService.isUserLogged
}
logout(){
  console.log(this.AuthenticationService.isUserLogged);
  this.AuthenticationService.logout();
  this.router.navigate(['']);

}
  ngAfterViewInit(): void {
    this.childEvent.emit(this.el);
  }

  ngOnInit(): void {

  }

}
