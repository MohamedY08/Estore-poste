import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './ui/auth/loginn/login.component';
import { SignupComponent } from './ui/auth/signup/signup.component';
import { AddCategoryComponent } from './ui/category/add-category/add-category/add-category.component';
import { CategorylistComponent } from './ui/category/categorylist/categorylist/categorylist.component';
import { EditCategoryComponent } from './ui/category/edit-category/edit-category/edit-category.component';
import { ErrorPageComponent } from './ui/error-page/error-page.component';
import { AddProductComponent } from './ui/products/add-product/add-product.component';
import { EditProductComponent } from './ui/products/edit-product/edit-product.component';
import { ListProductComponent } from './ui/products/list-product/list-product.component';
import { ProductDetailsComponent } from './ui/products/product-details/product-details.component';
import { productlistComponent } from './ui/products/productList/productList.component';
import { CarouselComponent } from './ui/shop/Carousel/carousel.component';
import { HomeComponent } from './ui/shop/home/home.component';
import { AuthGuard } from './ui/auth/auth.guard'
import { ProductInfoComponent } from './ui/products/product-info/product-info/product-info.component';


const routes: Routes = [
  //{ path: "login", component: LoginComponent },
  { path: '', component: HomeComponent },

  { path: 'signup', component: SignupComponent },
  { path: 'product', component: productlistComponent},
  { path: 'product/:id', component: ProductInfoComponent},
  { path: 'admin', component: LoginComponent },
  { path: 'admin/productmanager/add', component: SignupComponent, canActivate: [AuthGuard] },
  { path: 'admin/category', component: CategorylistComponent, canActivate: [AuthGuard]},
  { path: 'admin/category/add', component: AddCategoryComponent, canActivate: [AuthGuard]},
  { path: 'admin/category/edit/:id', component: EditCategoryComponent, canActivate: [AuthGuard]},
  { path: 'admin/product/add', component: AddProductComponent, canActivate: [AuthGuard]},
  { path: 'admin/product', component: ListProductComponent, canActivate: [AuthGuard]},
  { path: 'admin/product/edit/:id', component: EditProductComponent, canActivate: [AuthGuard]},



  { path: '**', pathMatch   : 'full', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
