import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/modals/product.model';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  id: any;
  cat: any;
  data: any;
  product= new Product();
  imagePreview!: string;

  constructor(private categoryService: CategoryService, private productService: ProductService, private route:ActivatedRoute, private router: Router) { }
  form= new FormGroup({
      name: new FormControl(''),
      price: new FormControl(''),
      category: new FormControl(''),
      description: new FormControl(''),
      quantity: new FormControl(''),
      imagePath: new FormControl(''),
  })

  ngOnInit(): void {

    this.id= this.route.snapshot.params.id;
    this.getCategoryData();
    this.getProduct();
  }

  getCategoryData(){
    this.categoryService.getCategory().subscribe(res => {
      this.cat = res;
    })
  }

  getProduct(){
    this.productService.getProductById(this.id).subscribe(res => {
      this.data = res;
      this.product= this.data;
      this.form.setValue({
        name: this.product.name,
        price: this.product.price,
        category: this.product.category,
        description: this.product.description,
        quantity: this.product.quantity,
        imagePath: this.product.imagePath
      })
      this.imagePreview = this.form.value.imagePath;
      console.log(this.form);
    })
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

    onUpdateProduct(){
      this.productService.updateProduct(this.id, this.form.value.name, this.form.value.price, this.form.value.category, this.form.value.description, this.form.value.quantity, this.form.value.imagePath).subscribe(res => {
        this.data = res;
        this.router.navigateByUrl('/admin/product');
      })
    }


}
