import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/modals/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {

  constructor(private http: HttpClient) { }
  getProductData(){
    let url="https://fakestoreapi.com/products";
    return this.http.get(url);
  }
  private products(): Observable<Product[]> {
    let url="https://fakestoreapi.com/products";
    return this.http.get<Product[]>(url);
  }
  public getProducts(): Observable<Product[]> {
    return this.products();
  }
}
