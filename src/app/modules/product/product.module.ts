import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './components/product/product.component';
import { ProductGalleryComponent } from './containers/product-gallery/product-gallery.component';
import { ProductDescriptionComponent } from './containers/product-description/product-description.component';
import {CustomMaterialModule} from "../custom-material/custom-material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [ProductComponent, ProductGalleryComponent, ProductDescriptionComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProductModule { }
