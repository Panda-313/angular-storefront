import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './components/shop/shop.component';
import {SharedModule} from "../shared/shared.module";
import {CustomMaterialModule} from "../custom-material/custom-material.module";


@NgModule({
  declarations: [ShopComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule,
    CustomMaterialModule
  ]
})
export class ShopModule { }
