import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {CustomMaterialModule} from "../custom-material/custom-material.module";
import {MainNavComponent} from "./components/main-nav/main-nav.component";
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {ActionCardComponent} from './components/action-card/action-card.component';
import {BlogCardComponent} from './components/blog-card/blog-card.component';
import {MainFooterComponent} from './components/main-footer/main-footer.component';
import {TwoLineTitleComponent} from './components/two-line-title/two-line-title.component';
import {NavigationListComponent} from './components/navigation-list/navigation-list.component';
import {SortInputComponent} from './components/sort-input/sort-input.component';
import {ReactiveFormsModule} from "@angular/forms";

const components = [
  MainNavComponent,
  ProductCardComponent,
  ActionCardComponent,
  BlogCardComponent,
  MainFooterComponent,
  TwoLineTitleComponent,
  SortInputComponent
];

@NgModule({
  declarations: [...components, NavigationListComponent],
  exports: [...components],
  imports: [
    CustomMaterialModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
}
