import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material';
import { KatalogComponent } from './katalog/katalog.component';
import { MakananComponent } from './makanan/makanan.component';
import { MinumanComponent } from './minuman/minuman.component';
import { PerlengkapanComponent } from './perlengkapan/perlengkapan.component';
import { CartComponent } from './cart/cart.component';
import { BantuanComponent } from './bantuan/bantuan.component';

const routes: Routes = [
  {
    path:'',
    component:PublicComponent,
    children:[
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'katalog',
        component:KatalogComponent
      }, 
      {
        path:'makanan',
        component:MakananComponent
      }, 
      {
        path:'minuman',
        component:MinumanComponent
      }, 
      {
        path:'perlengkapan',
        component:PerlengkapanComponent
      }, 
      {
        path:'cart',
        component:CartComponent
      }, 
      {
        path:'bantuan',
        component:BantuanComponent
      }, 
    ]
  }
]

@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    KatalogComponent,
    MakananComponent,
    MinumanComponent,
    PerlengkapanComponent,
    CartComponent,
    BantuanComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
  ]
})
export class PublicModule { }
