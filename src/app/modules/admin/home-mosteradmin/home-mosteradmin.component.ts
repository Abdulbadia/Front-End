import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../Services/authentication.service';

@Component({
  selector: 'app-home-mosteradmin',
  templateUrl: './home-mosteradmin.component.html',
  styleUrls: ['./home-mosteradmin.component.scss',
    '../assets/css/style.min.css',
    '../assets/css/datatables.min.css',
    '../assets/css/line-awesome.min.css',
    '../assets/css/bootstrap-select.min.css',
    '../assets/css/bootstrap-slider.css']
})
export class HomeMosteradminComponent implements OnInit {

username:string;
  constructor(private AuthenticationService:AuthenticationService,private router:Router) {
    this.username=localStorage.getItem('fullname');
   }
   signOut(){
  this.AuthenticationService.logout();
  this.router.navigate(['']);
}
  ngOnInit(): void {
  }

}
