import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { Product } from 'src/app/modals/product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  products: any;
  data: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductData();
  }

  getProductData(){
    this.productService.getProduct().subscribe(res => {
      this.products = res;
      console.log(this.products);
    })

  }

  deleteProduct(id){
    this.productService.deleteProduct(id).subscribe(res => {
      this.data = res;

      this.getProductData();
    });
  }

}
