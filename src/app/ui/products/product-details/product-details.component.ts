import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { CategoryService } from 'src/app/service/category.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  id: any;
  cat: any;
  data: any;
  product: any;


  constructor(private route: ActivatedRoute, public productsService: ProductService, private categoryService: CategoryService, public dialog: MatDialog, private router: Router) {


   }

  ngOnInit(): void {

    this.id= this.route.snapshot.params.id;
    alert(this.id);

    this.getProduct(this.id);


  }

  getProduct(id){
    this.productsService.getProductById(id).subscribe(res => {
      this.data = res;
      this.product= this.data;
      this.categoryService.getCategoryById(this.product.category).subscribe(res => {
        this.data = res;

        this.product.category = this.data.name;
      })
    })
    }


  }

/*getRelatedProducts() {
  this.productsService.getProducts()
  .subscribe(
    (product: Product[]) => {
      this.products = product
    });
}*/



