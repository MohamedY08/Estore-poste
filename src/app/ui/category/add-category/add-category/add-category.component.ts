import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  form!:FormGroup;
  submitted = false;
  data;
  constructor(private categoryService: CategoryService, private formbuilder: FormBuilder, private router: Router)
  { }

  createForm(){

    this.form= this.formbuilder.group({
      name: ['', Validators.required]
    })

  }
  ngOnInit(): void {
    this.createForm();
  }

  get f(){
    return this.form.controls;
  }
  onSaveCategory(){
    this.submitted= true;
    if(this.form.invalid){
      return;
    }
    this.categoryService.insertCategory(this.form.value).subscribe(res => {
      this.data= res;

      this.router.navigateByUrl('/admin/categories');
    })

  }
}
