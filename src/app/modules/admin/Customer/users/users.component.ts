import { Component, OnInit } from '@angular/core';
import { UsersApiService } from '../../Shared/users-api.service';
import { Customers } from '../../Standers/customers';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private _userService: UsersApiService) { }
  dataSource;
  displayedColumns: string[] =
    ['email', 'fullname', 'phonenumber', 'address', 'Action'];
  ngOnInit(): void {
    this.get_ALLUSers();
  }
  get_ALLUSers() {
    return this._userService.get_AllUSers().subscribe(data => {
      this.dataSource = data;
    })
  }

  Delete_USers(email: string) {
    if (window.confirm('Are you sure you want to delete this user')) {
      this._userService.Delete_USers(email).subscribe(data => {
        this.get_ALLUSers();
      })
    }
  }
}
