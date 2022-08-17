import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './maincomponents/header/header.component';
import { FooterComponent } from './maincomponents/footer/footer.component';
import { HomeComponent } from './maincomponents/home/home.component';
import { CartComponent } from './user/cart/cart.component';
import { CategoryComponent } from './user/category/category.component';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './maincomponents/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SharedfilesModule } from './Sharedfiles/sharedfiles/sharedfiles.module';
import { ProductComponent } from './user/product/product.component';
//import { CartitmesComponent } from './user/cart/cartitmes/cartitmes.component';
import { CartitemsComponent } from './user/cart/cartitems/cartitems.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
    CategoryComponent,
    ProductComponent,
    UserComponent,
    PageNotFoundComponent,
   // CartitmesComponent,
    CartitemsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedfilesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
