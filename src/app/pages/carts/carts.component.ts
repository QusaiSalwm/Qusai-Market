import { ProductsServiceService } from 'src/app/services/products/products-service.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css'],
})
export class CartsComponent implements OnInit {
  public cartProducts: any[] = [];
  public totalPrice: any = 0;
  public orderDone:boolean =false

  constructor(title: Title,private ProductService:ProductsServiceService) {
    title.setTitle('Your Cart');
  }

  ngOnInit(): void {
    this.getCartedProducts();
    this.getTotalPrice();
    // this.changAmount()
  }

  getCartedProducts() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      console.log(this.cartProducts, 'cart page');
    }
  }

  getTotalPrice() {
    this.totalPrice = 0;
    this.cartProducts.forEach((el) => {
      this.totalPrice += Math.round(el.item.price * el.quantity);
    });
  }

  addAmount(num: any) {
    this.cartProducts[num].quantity++;
    this.getTotalPrice();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  minsAmount(num: any) {
    this.cartProducts[num].quantity--;
    this.getTotalPrice();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  changAmount(num: any, ev: any) {
    this.cartProducts[num].quantity = ev.target.value;
    this.getTotalPrice()
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  deleteProduct(index:any) {
    this.cartProducts.splice(index, 1);
    this.getTotalPrice()
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  clear() {
    this.cartProducts.splice(0);
    this.getTotalPrice()
     localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  order() {
    let products = this.cartProducts.map((el) => {
     return { productId : el.item.id,quantity : el.quantity};
   })
    let Model : object = {
      userId: 12,
      date: new Date(),
      products : products
    }

    this.ProductService.createUserCart(Model).subscribe(res => {
      this.orderDone=true
    })
    this.clear()
    console.log(Model)
  }
}
