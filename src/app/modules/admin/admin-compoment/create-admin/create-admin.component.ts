import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/Interfaces/iuser';
import { passwordmatch } from 'src/app/modules/registeration/customvalidator/passwordmatch.validator';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.scss']
})
export class CreateAdminComponent implements OnInit {

  fieldTextType: boolean = false;
  CreateAdmin: FormGroup;
  constructor(private fb: FormBuilder, private router: Router,
    private _Auth: AuthenticationService) {
    this.CreateAdmin = fb.group({
      fullname: ['', [Validators.required, Validators.pattern('^([ء-ي]{2,})( [ء-ي]{2,}){2,}$')]],
      phonenumber: ['', [Validators.required, Validators.pattern('^01[0125][0-9]{8}$')]],
      address: fb.group({ governorat: ['', Validators.required], city: ['', Validators.required], street: ['', Validators.required] }),
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+@([a-zA-Z]+)\.(com|net|org|co)')]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}')]],
      image: "",
      type: "admin",
      // (?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}
      confirmpassword: ['', [Validators.required]]
    }, { validators: [passwordmatch] })
  }
  get fullname() {
    return this.CreateAdmin.get('fullname');
  }
  get phonenumber() {
    return this.CreateAdmin.get('phonenumber');
  }
  get username() {
    return this.CreateAdmin.get('username');
  }
  get password() {
    return this.CreateAdmin.get('password');
  }
  get confirmpassword() {
    return this.CreateAdmin.get('confirmpassword');
  }
  get governorat() {

    return this.CreateAdmin.get('address').get('governorat');
  }
  get city() {
    return this.CreateAdmin.get('address').get('city');
  }
  get street() {
    return this.CreateAdmin.get('address').get('street');
  }
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  submit() {
    console.log('submit')
    let user: Iuser = {
      name: this.fullname.value,
      phonenumber: this.phonenumber.value,
      address: `${this.governorat.value},${this.city.value},${this.street.value}`,
      email: this.username.value,
      password: this.password.value,
      image: "",
      type: "admin"
    }
    const observer = {
      next: () => {
        alert("Account Added Successfully");
        this.router.navigate(["Auth/Login"])
      },
      error: (err: Error) => {
        alert("Something wrong happened");
        err.message
      }
    }
    this._Auth.register(user).subscribe(observer);
  }

  ngOnInit(): void {
  }


}
