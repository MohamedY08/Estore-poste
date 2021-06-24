import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './ui/auth/signup/signup.component';
import { AddCategoryComponent } from './ui/category/add-category/add-category/add-category.component';
import { CategorylistComponent } from './ui/category/categorylist/categorylist/categorylist.component';
import { EditCategoryComponent } from './ui/category/edit-category/edit-category/edit-category.component';
import { AddProductComponent } from './ui/products/add-product/add-product.component';
import { EditProductComponent } from './ui/products/edit-product/edit-product.component';
import { ListProductComponent } from './ui/products/list-product/list-product.component';
import { ProductDetailsComponent } from './ui/products/product-details/product-details.component';
import { productlistComponent } from './ui/products/productList/productList.component';
import { CarouselComponent } from './ui/shop/Carousel/carousel.component';
import { HomeComponent } from './ui/shop/home/home.component';



const routes: Routes = [
  //{ path: "login", component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'product', component: productlistComponent},
  { path: 'product/:id', component: ProductDetailsComponent},
  { path: 'admin/category', component: CategorylistComponent},
  { path: 'admin/category/add', component: AddCategoryComponent},
  { path: 'admin/category/edit/:id', component: EditCategoryComponent},
  { path: 'admin/product/add', component: AddProductComponent },
  { path: 'admin/product', component: ListProductComponent },
  { path: 'admin/product/edit/:id', component: EditProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
