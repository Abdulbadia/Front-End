import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() title:string="";
  @Input() data:any[]=[];
  @Output() selectedVal = new EventEmitter()
 
 
  constructor() { }

  ngOnInit(): void {
  }
  ShowChange(event:any){

    this.selectedVal.emit(event)
   }

}
