import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }


  getCategory(){
    return this.httpClient.get('http://localhost:3000/api/categories');
  }

  insertCategory(data){
    return this.httpClient.post('http://localhost:3000/api/category/add', data);

  }



}
