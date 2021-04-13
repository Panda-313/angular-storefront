import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './containers/cart/cart.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import {CustomMaterialModule} from "../custom-material/custom-material.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [CartComponent, CartPageComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    CustomMaterialModule,
    ReactiveFormsModule
  ]
})
export class CartModule { }
