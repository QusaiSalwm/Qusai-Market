import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsServiceService } from 'src/app/services/products/products-service.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  public product: any;
  public categories: any[] = [];
  public base64: any = '';
  public selectedCat: any = '';
  public select: any;
  constructor(
    private productDetService: ProductsServiceService,
    private route: ActivatedRoute,
    public router: Router,
    private title: Title,
    private adminService: AdminService,
    private productService: ProductsServiceService
  ) {}

  addProductForm = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    image: new FormControl(),
    category: new FormControl(),
  });

  ngOnInit(): void {
    this.getProduct();
    this.getAllCategories();
    this.updateProduct();
  }

  public getProduct(): void {
    this.route.params.subscribe((params) => {
      this.productDetService
        .getProductDetails(params['id'])
        .subscribe((pro) => {
          this.product = pro;
          this.base64 = this.product.image;
          this.select = this.product.category;
          this.addProductForm.patchValue({
            title: this.product.title,
            price: this.product.price,
            description: this.product.description,
            image: this.product.image,
            category: this.product.category,
          });
          this.title.setTitle(pro.title);
          console.log(this.product, 'product ');
        });
    });
  }
  getCat(ev: any) {
    this.addProductForm.get('category')?.setValue(ev.target.value);
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

  updateProduct() {
    this.adminService
      .updateProduct(this.addProductForm.value,this.product.id)
      .subscribe((res) => {
        console.log(res, 'update product');
      });
    console.log(this.addProductForm.value, 'new value of product');
  }
}
