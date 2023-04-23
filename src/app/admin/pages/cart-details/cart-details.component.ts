import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from 'src/app/services/products/products-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css'],
})
export class CartDetailsComponent implements OnInit {
  public cartDet: any;
  public productDet: any[] = [];
  public totalPrice:any=0
  constructor(
    private adminService: AdminService,
    private productService: ProductsServiceService,
    private route: ActivatedRoute,
    public router: Router,
    private title: Title
  ) {

  }

  ngOnInit(): void {
    this.getCart();
  }

  public getCart(): void {
    this.route.params.subscribe((params) => {
     this.title.setTitle(`Cart ${params['id']} `);
      this.adminService.getCart(params['id']).subscribe((det) => {
        this.cartDet = det;
        this.cartDet.products.map((el: any) => {
          this.productService
            .getProductDetails(el.productId)
            .subscribe((res) => {
              this.productDet.push({ item: res, quantity: el.quantity });
              this.totalPrice = 0;
              this.productDet.forEach((el: any) => {
                // console.log(el);
                this.totalPrice += Math.round(el.item.price * el.quantity);
              });
              console.log(this.productDet);
            });
        });
        console.log(this.productDet, 'Product Details');
        console.log(this.cartDet, 'Cart Data');
      });
    });
  }


}
