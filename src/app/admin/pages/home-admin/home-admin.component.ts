import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css'],
})
export class HomeAdminComponent implements OnInit {
  public carts: any;

  Form = new FormGroup({
    start: new FormControl(null),
    end: new FormControl(null),
  });

  constructor(title: Title, private adminService: AdminService) {
    title.setTitle('Welcome Admin');
  }

  ngOnInit(): void {
    this.getCarts();
    this.apply();
    this.deleteCart()
  }

  getCarts() {
    this.adminService.getCarts().subscribe((res) => {
      this.carts = res;
      console.log(this.carts, 'All Carts');
    });
  }
  apply() {
    this.adminService.getCartsByDateRange(this.Form.value).subscribe((res) => {
      this.carts = res;
      console.log(this.carts);
    });
  }
  deleteCart(cartId?:any){
    this.adminService.deleteCart(cartId).subscribe((res) => {
      console.log(res,'Cart Deleted')
    })
  }
}
