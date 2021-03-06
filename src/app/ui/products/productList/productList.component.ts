import { Component, OnInit } from '@angular/core';
//import { ProductService } from 'src/app/components/shared/services/product.service';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
//import { Product, ColorFilter } from 'src/app/modals/product.model';

import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.scss']
})
export class productlistComponent implements OnInit {

  products: any;
  data: any;
constructor(private productService: ProductService, private categoryService: CategoryService){


}



  public sidenavOpen:boolean = true;
  public animation    :   any;   // Animation
  public sortByOrder  :   string = '';   // sorting
  public page:any;
  public tagsFilters  :   any[] = [];
  public viewType: string = 'grid';
  public viewCol: number = 33.3;

  /*public items        :   Product[] = [];
  public allItems: Product[] = [];
  public products: Product[] = [];
  public tags         :   any[] = [];
  public colors       :   any[] = [];

  constructor(private productService: ProductService, private route: ActivatedRoute) {
    this.route.params.subscribe(
      (params: Params) => {
        const category = params['category'];
        this.productService.getProductByCategory(category).subscribe(products => {
       this.allItems = products;
       this.products = products.slice(0.8);
       this.getTags(products)
        })
      }
    )
  }



     // Get current product tags
     public getTags(products) {
      var uniqueBrands = []
      var itemBrand = Array();
      products.map((product, index) => {
         if(product.tags) {
            product.tags.map((tag) => {
            const index = uniqueBrands.indexOf(tag);
            if(index === -1)  uniqueBrands.push(tag);
         })
        }
      });
      for (var i = 0; i < uniqueBrands.length; i++) {
           itemBrand.push({brand:uniqueBrands[i]})
      }
      this.tags = itemBrand
   }

*/
  ngOnInit(): void{
    this.getProductData();
  }



  public changeViewType(viewType: string, viewCol: number){
    this.viewType = viewType;
    this.viewCol = viewCol;
  }

    // Animation Effect fadeIn
    public fadeIn() {
      this.animation = 'fadeIn';
  }

  // Animation Effect fadeOut
  public fadeOut() {
      this.animation = 'fadeOut';
  }
/*
    // Update tags filter
    public updateTagFilters(tags: any[]) {
      this.tagsFilters = tags;
      this.animation == 'fadeOut' ? this.fadeIn() : this.fadeOut(); // animation
  }



    // sorting type ASC / DESC / A-Z / Z-A etc.
    public onChangeSorting(val) {
      this.sortByOrder = val;
      this.animation == 'fadeOut' ? this.fadeIn() : this.fadeOut(); // animation
   }

     // Initialize filetr Items
  public filterItems(): Product[] {
    return this.items.filter((item: Product) => {

        const Tags: boolean = this.tagsFilters.reduce((prev, curr) => { // Match Tags
          if(item.tags) {
            if (item.tags.includes(curr)) {
              return prev && true;
            }
          }
        }, true);
        return Tags; // return true
    });

}

public onPageChanged(event){
  this.page = event;
  this.allItems;
  window.scrollTo(0,0);
}


  // Update price filter
//   public updatePriceFilters(price: any) {
//     let items: any[] = [];
//     this.products.filter((item: Product) => {
//         if (item.price >= price[0] && item.price <= price[1] )  {
//            items.push(item); // push in array
//         }
//     });
//     this.items = items;
// }


  // Update price filter
  public updatePriceFilters(price: any) {
    console.log(price);
    console.log(this.products);


   this.allItems = this.products.filter((item: Product) => {
     return item.price >= price.priceFrom && item.price <= price.priceTo
    });
     console.log(this.products);

}

onBrendsChanged(newBrend) {
  console.log(newBrend);
  this.allItems = newBrend === 'all' ? this.products : this.products.filter(

    item => item.brand === newBrend
  )
  console.log(this.allItems);


}*/
getProductData(){
  this.productService.getProduct().subscribe(res => {
    this.products = res;

    this.products.forEach(product => {
      this.categoryService.getCategoryById(product.category).subscribe(res => {
        this.data = res;

        product.category = this.data.name;
      })
    });

  })
}
}
