import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/modals/category.model';

import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  id: any;
  data: any;
  category = new Category();

  constructor(private categoryService: CategoryService, private route:ActivatedRoute, private router: Router) { }

  form= new FormGroup({
    name: new FormControl('')
  })
  ngOnInit(): void {
    this.id= this.route.snapshot.params.id;
    this.getCategory();
  }
getCategory(){
this.categoryService.getCategoryById(this.id).subscribe(res => {
  this.data = res;
  this.category= this.data;
  this.form= new FormGroup({
    name: new FormControl(this.category.name)
  })
})
}

  onUpdateCategory(){
    this.categoryService.updateCategory(this.id,this.form.value).subscribe(res => {
      this.data = res;
      this.router.navigateByUrl('/admin/product');
    })
  }
}
