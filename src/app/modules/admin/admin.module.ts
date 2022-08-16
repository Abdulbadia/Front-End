import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductAdminComponent } from './Allcomponent/product-admin/product-admin.component';
import { CreatePRoductComponent } from './Allcomponent/create-product/create-product.component';
import { UpdateProductComponent } from './Allcomponent/update-product/update-product.component';
import { ProductDetialsComponent } from './Allcomponent/product-detials/product-detials.component';
import { UsersComponent } from './Customer/users/users.component';
import { AllOrdersComponent } from './Oreders/all-orders/all-orders.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HomeMosteradminComponent } from './home-mosteradmin/home-mosteradmin.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

const routes: Routes =
  [
    {
      path: "", component: AdminComponent, children: [
        { path: "products", component: ProductAdminComponent },
        { path: "Details/:id", component: ProductDetialsComponent },
        { path: "Creat", component: CreatePRoductComponent },
        { path: "Edit/:id", component: UpdateProductComponent },
        { path: "User", component: UsersComponent },
        { path: "orders", component: AllOrdersComponent },
      ]
    }
  ]


@NgModule({
  declarations: [
    AdminComponent,
    ProductAdminComponent,
    CreatePRoductComponent,
    UpdateProductComponent,
    ProductDetialsComponent,
    UsersComponent,
    AllOrdersComponent,
    HomeMosteradminComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSnackBarModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    MatMenuModule,

    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
