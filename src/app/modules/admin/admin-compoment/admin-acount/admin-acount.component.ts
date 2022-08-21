import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../Shared/admin.service';
import { UsersApiService } from '../../Shared/users-api.service';

@Component({
  selector: 'app-admin-acount',
  templateUrl: './admin-acount.component.html',
  styleUrls: ['./admin-acount.component.scss']
})
export class AdminAcountComponent implements OnInit {

  constructor(private Api_admin: AdminService, private _userServices: UsersApiService) { }
  dataSource;
  displayedColumns: string[] =
    ['email', 'fullname', 'phonenumber', 'address', 'Action'];
  ngOnInit(): void {
    this.get_ALLadmins();
  }
  get_ALLadmins() {
    return this.Api_admin.get_Alladmins().subscribe(data => {
      this.dataSource = data;
    })
  }
  Delete_USers(email: string) {
    if (window.confirm('هل أنت متأكد أنك تريد حذف هذا المستخدم')) {
      this._userServices.Delete_USers(email).subscribe(data => {
        this.get_ALLadmins();
      })
    }
  }
}
