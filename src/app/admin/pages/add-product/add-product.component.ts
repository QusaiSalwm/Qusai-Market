import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsServiceService } from 'src/app/services/products/products-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  public categories: any[] = [];
  public base64: any = '';
  public selectedCat: any = '';

  constructor(private productService: ProductsServiceService,private adminService:AdminService) {}

  addProductForm = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    image: new FormControl(),
    category: new FormControl(),
  });

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.productService.getAllCategories().subscribe((res) => {
      this.categories = res;
      console.log(this.categories, 'categories');
    });
  }

  getImagePath(evt: any) {
    const file = evt.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64 = reader.result;
      this.addProductForm.get('image')?.setValue(this.base64);

    };
  }
  getCat(ev: any) {
    this.addProductForm.get('category')?.setValue(ev.target.value)
  }

  addProduct() {
    this.adminService.addNewProduct(this.addProductForm.value).subscribe(res => {
      console.log(res,'add product')
    })
    console.log(this.addProductForm.value);
  }
}
