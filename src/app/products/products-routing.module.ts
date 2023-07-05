import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { CartComponent } from './cart/cart.component';
import { WishListComponent } from './wish-list/wish-list.component';

const routes: Routes = [

  //all products - main page
  { 
    path: '', component: AllProductsComponent 
  },

  //view product
  {
    path: 'viewproduct/:productId', component:ViewProductComponent
  },

  //cart
  {
    path: 'cart', component:CartComponent
  },

  //wishlist
  {
    path: 'wishlist', component:WishListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
