import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './ui/auth/signup/signup.component';
import { AddCategoryComponent } from './ui/category/add-category/add-category/add-category.component';
import { CategorylistComponent } from './ui/category/categorylist/categorylist/categorylist.component';
import { productlistComponent } from './ui/products/productList/productList.component';
import { CarouselComponent } from './ui/shop/Carousel/carousel.component';
import { HomeComponent } from './ui/shop/home/home.component';



const routes: Routes = [
  //{ path: "login", component: LoginComponent },
  { path: "", component: HomeComponent },
  { path: "signup", component: SignupComponent },
  { path: "products/all", component: productlistComponent},
  { path: "admin/categories", component: CategorylistComponent},
  { path: "admin/category/add", component: AddCategoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
