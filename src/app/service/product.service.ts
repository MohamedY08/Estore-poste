import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Product } from '../modals/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private httpClient: HttpClient) { }

  getProduct(){
    return this.httpClient.get(environment.apiUrl+'/products')
  }

  insertProduct(name: string, price: string, category: string, description: string, quantity: string, image: File){
    const data = new FormData();
    data.append("name", name);
    data.append("price", price);
    data.append("category", category);
    data.append("description", description);
    data.append("quantity", quantity);
    data.append("image", image, name);
    return this.httpClient.post< { products: Product[] } >(environment.apiUrl+'/product/add', data);

  }

  getProductById(id){
    return this.httpClient.get(environment.apiUrl+'/product/'+id);
  }

  updateProduct(id, name: string, price: string, category: string, description: string, quantity: string, image: File){
    const data = new FormData();
    data.append("name", name);
    data.append("price", price);
    data.append("category", category);
    data.append("description", description);
    data.append("quantity", quantity);
    data.append("image", image, name);
    return this.httpClient.put< { products: Product[] } >(environment.apiUrl+'/product/update/'+id, data);
  }

  deleteProduct(id){
    return this.httpClient.delete(environment.apiUrl+'/product/'+id);
  }

}
