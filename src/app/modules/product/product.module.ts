import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './components/product/product.component';
import { ProductGalleryComponent } from './containers/product-gallery/product-gallery.component';
import { ProductDescriptionComponent } from './containers/product-description/product-description.component';


@NgModule({
  declarations: [ProductComponent, ProductGalleryComponent, ProductDescriptionComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
