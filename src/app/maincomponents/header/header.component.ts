import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, AfterViewInit } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,AfterViewInit {
@Output() childEvent=new EventEmitter();
@ViewChild('navv') el: ElementRef ;
  constructor() { }
  ngAfterViewInit(): void {
    this.childEvent.emit(this.el);
  }

  ngOnInit(): void {

  }

}
