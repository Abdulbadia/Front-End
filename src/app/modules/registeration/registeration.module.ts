import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../../app.module';
import{HttpClientModule} from '@angular/common/http'
const routes:Routes=[
  {path:"Register",component:RegisterComponent},
  {path:"Login",component:LoginComponent},
]


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule
    ]
})
export class RegisterationModule { }
