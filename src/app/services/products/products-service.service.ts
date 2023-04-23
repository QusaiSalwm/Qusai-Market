import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsServiceService {
  BASE_URL = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/products`);
  }

  getAllCategories(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/products/categories`);
  }

  getProductsByCategory(cat: any): Observable<any> {
    return this.http.get(`${this.BASE_URL}/products/category/${cat}`);
  }

  getProductDetails(id:any): Observable<any> {
    return this.http.get(`${this.BASE_URL}/products/${id}`);
  }

  createUserCart(Model:object) {
     return this.http.post(`${this.BASE_URL}/carts`,Model);
  }
}
