import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './ui/auth/signup/signup.component';
import { CarouselComponent } from './ui/Carousel/carousel.component';
import { HomeComponent } from './ui/home/home.component';

const routes: Routes = [
  //{ path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
