import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './user/sigin/sigin.component';



const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: "home-robotshop",
  },
  {
    path: 'catalog',
    component: CatalogComponent,
    title: "catalog",
  },
  {
    path: 'cart',
    component: CartComponent,
    title: "cart",
  },
  {
    path:'signIn',
    component:SignInComponent,
    title:'sign-In'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home'
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
