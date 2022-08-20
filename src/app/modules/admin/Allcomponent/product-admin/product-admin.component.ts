import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProductAPiService } from '../../Shared/product-api.service';
import { IProduct } from '../../Standers/iproduct';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.scss']
})
export class ProductAdminComponent implements OnInit {
  dataSource;
  constructor(private Ser: ProductAPiService, private router: Router) {
  }

  displayedColumns: string[] =
    ['id', 'name',
      'price', 'availability', 'brandName', 'discountPercentage', 'quantity', 'Action'];

  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnInit(): void {
    this.getProducser();

  }

  getProducser() {
    return this.Ser.get_AllProduct().subscribe(data => {
      console.log(data);
      this.dataSource = new MatTableDataSource<IProduct>(data);
      console.log(this.dataSource);
      this.dataSource.paginator = this.paginator;

    }
    )

  }
  Deleted_Produt(id) {

    if (window.confirm('Are you sure you want to delete ')) {
      this.Ser.DeleteProduct(id).subscribe(data => {
        this.getProducser();
      })
    }

  }

  viewproduct(id: number) {
    this.router.navigate(['/Admin/Detail/' + id]);
  }
}
