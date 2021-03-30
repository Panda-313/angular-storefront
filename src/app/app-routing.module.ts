import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./modules/blog-page/blog-page.module').then(m => m.BlogPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
