import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {CustomMaterialModule} from "../custom-material/custom-material.module";
import {MainNavComponent} from "./components/main-nav/main-nav.component";
import {ProductCardComponent} from "./components/product-card/product-card.component";
import { ActionCardComponent } from './components/action-card/action-card.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';

const components = [
  MainNavComponent,
  ProductCardComponent,
  ActionCardComponent
]

@NgModule({
  declarations: [...components, BlogCardComponent],
  exports: [...components, BlogCardComponent],
  imports: [
    CustomMaterialModule,
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
