import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavigationThemeResolver} from "./resolvers/navigation-theme.resolver";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home-page/home-page.module').then(m => m.HomePageModule),
    resolve: {
      navTheme: NavigationThemeResolver
    }
  },
  {
    path: 'blog',
    loadChildren: () => import('./modules/blog-page/blog-page.module').then(m => m.BlogPageModule),
    resolve: {
      navTheme: NavigationThemeResolver
    }
  },
  {
    path: 'shop',
    loadChildren: () => import('./modules/shop/shop.module').then(m => m.ShopModule),
    resolve: {
      navTheme: NavigationThemeResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
