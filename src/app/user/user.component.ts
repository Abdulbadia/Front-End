import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit,AfterViewInit {
childData: ElementRef;
  constructor() { }
  ngAfterViewInit(): void {
this.childData.nativeElement.classList.remove('navbar-dark','position-absolute')  }

  ngOnInit(): void {
  }

}
