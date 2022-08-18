import { Component, OnInit } from '@angular/core';

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

  constructor() {
    this.username=localStorage.getItem('fullname');
   }

  ngOnInit(): void {
  }

}
