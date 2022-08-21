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
isUserLogged:boolean=this.AuthenticationService.isUserLogged;
username:string=localStorage.getItem('fullname');
  constructor( private AuthenticationService:AuthenticationService,private router :Router) {
    console.log(this.isUserLogged);
    this.AuthenticationService.getLoggedStatus().subscribe(status=>{
      this.isUserLogged=status;}
      )}
IProduct
logout(){
  console.log(this.isUserLogged);
  this.AuthenticationService.logout();
  this.router.navigate(['']);
}
  ngAfterViewInit(): void {
    this.childEvent.emit(this.el);
  }

  ngOnInit(): void {

  }

}
