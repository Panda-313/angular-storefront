import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import {CustomMaterialModule} from "../custom-material/custom-material.module";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [HomePageComponent, HeaderComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    CustomMaterialModule,
    SharedModule
  ]
})
export class HomePageModule { }
