import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogPageComponent} from "./components/blog-page/blog-page.component";

const routes: Routes = [{
  component: BlogPageComponent,
  path: ''
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogPageRoutingModule { }
