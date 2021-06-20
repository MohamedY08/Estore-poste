import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }


  getCategory(){
    return this.httpClient.get(environment.apiUrl+'/categories');
  }

  insertCategory(data){
    return this.httpClient.post(environment.apiUrl+'/category/add', data);

  }

  getCategoryById(id){
    return this.httpClient.get(environment.apiUrl+'/category/'+id);
  }

  updateCategory(id, data){
    return this.httpClient.put(environment.apiUrl+'/category/update/'+id, data);
  }

  deleteCategory(id){
    return this.httpClient.delete(environment.apiUrl+'/category/'+id);
  }

}
