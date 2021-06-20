import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { CategoryService } from 'src/app/service/category.service';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { Product } from 'src/app/modals/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  form!:FormGroup;
  cat: any;
  submitted = false;
  product!: Product;
  data: any;
  imagePreview!: string;
  constructor(private categoryService: CategoryService, private productService: ProductService, private formbuilder: FormBuilder, private router: Router) { }

  createForm(){

    this.form= new FormGroup({
      name: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      quantity: new FormControl(null, Validators.required),
      imagePath: new FormControl(null, Validators.required),

    });


  }

  ngOnInit(): void {
    this.getCategoryData();
    this.createForm();
  }

  getCategoryData(){
    this.categoryService.getCategory().subscribe(res => {
      this.cat = res;
      console.log(this.cat);
    })
  }

  get f(){
    return this.form.controls;
  }

  onImagePicked(event: any) {
    const file = (event.target as HTMLFormElement).files[0];
    this.form.patchValue({ imagePath: file });
    console.log(this.form)
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSaveProduct(){
    this.submitted= true;
    console.log(this.form.value);
    if(this.form.invalid){
      return;
    }
    this.productService.insertProduct(this.form.value.name, this.form.value.price, this.form.value.category, this.form.value.description, this.form.value.quantity, this.form.value.imagePath ).subscribe(res => {
      this.data= res;
      console.log(this.data);

      this.form.reset();
      this.imagePreview = "";

      this.router.navigateByUrl('/admin/product');
    })

  }

}
