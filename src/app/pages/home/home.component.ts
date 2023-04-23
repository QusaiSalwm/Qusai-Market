import { style } from '@angular/animations';
import { ProductsServiceService } from './../../services/products/products-service.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public products: any;
  public categories: any;
  public category: any = 'All'
  public productsByCategory: any;
  public cartProducts: any[] = [];
  public addedCart = 'block';
  public playerName :string = ''

  constructor(private productsService: ProductsServiceService, private title: Title) {
  }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
    // this.getProductsByCategory()
  }

  getProducts() {
    this.productsService.getAllProducts().subscribe((res) => {
      this.products = res;
      return this.products;
      console.log(this.products, 'products');
    });
  }
  getCategories() {
    this.productsService.getAllCategories().subscribe((res) => {
      this.categories = res;
      console.log(this.categories, 'categories');
    });
  }

  filter(event: any) {
    this.category = event.target.value;
    this.title.setTitle(`Welcome To Hell | ${this.category || 'All'} `);

    console.log(this.category);

    this.productsService
      .getProductsByCategory(this.category)
      .subscribe((res) => {
        this.products = res;
        if (this.products == null) {
          this.products = this.getProducts();
        }
        console.log(this.products, 'products By Category');
      });

  }

  click(event: any) {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      let exist = this.cartProducts.find((el) => el.item.id == event.id);
      if (exist) {
        alert('This Product is already carted');
      } else {
        this.cartProducts.push({ item: event, quantity: this.playerName });
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      }
    } else {
      this.cartProducts.push({ item: event, quantity: this.playerName });
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
    console.log(this.cartProducts);
    console.log(this.playerName)
  }

  display(item: any) {
    item.target.style.display = 'none';
  }
}
