import { Component, OnInit } from '@angular/core';
import'./assets/scripts/bootstrap-select.min.js';
import'./assets/scripts/bootstrap-slider.min.js';
import'./assets/scripts/bootstrap-tooltip-custom-class.js';
import'./assets/scripts/bootstrap.bundle.min.js';
import'./assets/scripts/Chart.min.js';





@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss',
  'assets/css/style.min.css',
'assets/css/datatables.min.css',
'assets/css/line-awesome.min.css',
'assets/css/bootstrap-select.min.css',
'assets/css/bootstrap-slider.css'
]
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
