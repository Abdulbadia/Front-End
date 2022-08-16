import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';
import { SpinnerloaderComponent } from './spinnerloader/spinnerloader.component';



@NgModule({
  declarations: [
    SelectComponent,
    SpinnerloaderComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    SpinnerloaderComponent,
    SelectComponent
  ]
})
export class SharedfilesModule { }
