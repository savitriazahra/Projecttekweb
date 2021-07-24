import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material';
import { GalleryComponent } from './gallery/gallery.component';
import { ImagesComponent } from './images/images.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { InfoComponent } from './info/info.component'; 

const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent,
      },
      {
        path:'product',
        component:ProductComponent
      }, 
      {
        path: 'gallery',
        component: GalleryComponent
      },
      {
        path: 'images',
        component: ImagesComponent
      },
      {
        path: 'info',
        component: InfoComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/admin/dashboard'
      }
    ]
  },

]

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    GalleryComponent,
    ImagesComponent,
    ProductComponent,
    ProductDetailComponent,
    FileUploaderComponent,
    InfoComponent,
  ],
  entryComponents:[
    ImagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    ImageCropperModule,
    FormsModule
  ]
})
export class AdminModule { }
