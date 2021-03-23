import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './main-nav/main-nav.component';
import {RouterModule} from "@angular/router";
import {CustomMaterialModule} from "../custom-material/custom-material.module";

const components = [
  MainNavComponent
]

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CustomMaterialModule,
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
