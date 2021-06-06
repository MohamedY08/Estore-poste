import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './ui/auth/signup/signup.component';
import { productlistComponent } from './ui/products/productList/productList.component';
import { CarouselComponent } from './ui/shop/Carousel/carousel.component';
import { HomeComponent } from './ui/shop/home/home.component';

const routes: Routes = [
  //{ path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "", component: HomeComponent },
  { path: "products/all", component: productlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
