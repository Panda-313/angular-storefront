import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CartComponent} from "./containers/cart/cart.component";
import {CartPageComponent} from "./components/cart-page/cart-page.component";

const routes: Routes = [{
  path: '',
  component: CartPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
