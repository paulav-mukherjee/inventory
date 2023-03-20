import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { SellerHomeComponent } from './seller/seller-home/seller-home.component';
import { SellerProductListComponent } from './seller/seller-product-list/seller-product-list.component';
import { SellerUpdateProductComponent } from './seller/seller-update-product/seller-update-product.component';
import { SellerComponent } from './seller/seller.component';

const routes: Routes = [
  {
    path : 'seller',
    component : SellerComponent
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'seller-home',
    component : SellerHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'seller-product-list',
    component : SellerProductListComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'seller-update-list/:id',
    component : SellerUpdateProductComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
