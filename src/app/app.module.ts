import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { FlexLayoutModule } from '@angular/flex-layout';

import { HeaderComponent } from './ui/header/header.component';
import { SignupComponent } from './ui/auth/signup/signup.component';
import { CarouselComponent } from './ui/shop/Carousel/carousel.component';
import { FooterComponent } from './ui/footer/footer.component';
import { HomeComponent } from './ui/shop/home/home.component';
import { productlistComponent } from './ui/products/productList/productList.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import {NgxPaginationModule} from 'ngx-pagination';



import {
  SwiperModule,
  SwiperConfigInterface,
  SWIPER_CONFIG,
} from 'ngx-swiper-wrapper';

import { from } from 'rxjs';
import { CategorylistComponent } from './ui/category/categorylist/categorylist/categorylist.component';
import { AddCategoryComponent } from './ui/category/add-category/add-category/add-category.component';
import { MatTableModule } from '@angular/material/table';
import { EditCategoryComponent } from './ui/category/edit-category/edit-category/edit-category.component';
import { AddProductComponent } from './ui/products/add-product/add-product.component';
import { EditProductComponent } from './ui/products/edit-product/edit-product.component';
import { ListProductComponent } from './ui/products/list-product/list-product.component';






const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    CarouselComponent,
    FooterComponent,
    HomeComponent,
    productlistComponent,
    CategorylistComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    AddProductComponent,
    EditProductComponent,
    ListProductComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatCardModule,
    NgxPaginationModule,
    MatMenuModule,
    MatSidenavModule,
    SwiperModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatTableModule

  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },


  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
