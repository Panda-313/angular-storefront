import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogPageRoutingModule } from './blog-page-routing.module';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { HeaderComponent } from './components/header/header.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [BlogPageComponent, HeaderComponent],
  imports: [
    CommonModule,
    BlogPageRoutingModule,
    SharedModule
  ]
})
export class BlogPageModule { }
