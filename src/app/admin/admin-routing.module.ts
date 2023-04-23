import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { CartDetailsComponent } from './pages/cart-details/cart-details.component';
import { ProductsAdminComponent } from './pages/products-admin/products-admin.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';

const routes: Routes = [
  {
    path: '',
    component:HomeAdminComponent
  },
  {
    path: 'cart/:id',
    component:CartDetailsComponent
  },
  {
    path: 'products',
    component:ProductsAdminComponent
  },
  {
    path: 'products/add-product',
    component:AddProductComponent
  }, {
    path: 'products/update-product/:id',
    component:UpdateProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
