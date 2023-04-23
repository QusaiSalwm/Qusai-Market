import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { NavAdminComponent } from './pages/shared/nav-admin/nav-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartDetailsComponent } from './pages/cart-details/cart-details.component';
import { ProductsAdminComponent } from './pages/products-admin/products-admin.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';


@NgModule({
  declarations: [
    AdminComponent,
    HomeAdminComponent,
    NavAdminComponent,
    CartDetailsComponent,
    ProductsAdminComponent,
    AddProductComponent,
    UpdateProductComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
  ],
})
export class AdminModule {}
