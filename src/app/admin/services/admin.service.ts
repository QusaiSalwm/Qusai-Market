import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  BASE_URL = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) {}

  getCarts() {
    return this.http.get(`${this.BASE_URL}/carts`);
  }
  getCartsByDateRange(param?: any) {
    let params = new HttpParams();
    params = params
      .append('startdate', param?.start)
      .append('enddate', param?.end);
    return this.http.get(`${this.BASE_URL}/carts`, { params });
  }
  deleteCart(cartId: any) {
    return this.http.delete(`${this.BASE_URL}/carts/${cartId}`);
  }
  getCart(cartId: any) {
    return this.http.get(`${this.BASE_URL}/carts/${cartId}`);
  }
  addNewProduct(Model: any) {
    return this.http.post(`${this.BASE_URL}/products`, Model);
  }
  updateProduct(Model: any, id: any) {
    return this.http.put(`${this.BASE_URL}/products/${id}`, Model);
  }
  deleteProduct(id:any) {
    return this.http.delete(`${this.BASE_URL}/products/${id}`);
  }
}
