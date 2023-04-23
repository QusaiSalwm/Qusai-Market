import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from 'src/app/services/products/products-service.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.css'],
})
export class ProductsAdminComponent implements OnInit {
  public products: any[] = [];

  constructor(
    private productService: ProductsServiceService,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.delete()
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe((res) => {
      this.products = res;
      console.log(this.products, 'Products');
    });
  }
  delete(id?:any) {
    this.adminService.deleteProduct(id).subscribe((res) => {
      console.log(res,'deleted product')
    })
  }
}
