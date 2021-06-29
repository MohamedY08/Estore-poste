import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/modals/product.model';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {
  id: any;
  cat: any;
  data: any;
  product= new Product();
  imagePreview!: string;
  public counter            :   number = 1;

  constructor(private categoryService: CategoryService, private productService: ProductService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.id= this.route.snapshot.params.id;
    this.getCategoryData();
    this.getProduct();
  }

  getCategoryData(){
    this.categoryService.getCategory().subscribe(res => {
      this.cat = res;
    })
  }

  getProduct(){
    this.productService.getProductById(this.id).subscribe(res => {
      this.data = res;
      this.product= this.data;


      console.log(this.product);
    })
    }

    public increment() {
      this.counter += 1;
    }

    public decrement() {
      if(this.counter >1){
         this.counter -= 1;
      }
    }
}
