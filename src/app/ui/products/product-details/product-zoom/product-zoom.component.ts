import { Component, OnInit, Inject, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from '../../../../service/product.service';
import { Product } from 'src/app/modals/product.model';

@Component({
  selector: 'app-product-zoom',
  templateUrl: './product-zoom.component.html',
  styleUrls: ['./product-zoom.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductZoomComponent implements OnInit {
  public product;
  public selectedProductImageIndex;

  @ViewChild('zoomImage', { static: true }) zoomImage;

  constructor( private productsService: ProductService, public dialogRef: MatDialogRef<ProductZoomComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {product, index}) {
                this.product = data.product;
                this.selectedProductImageIndex = data.index;
               }

  ngOnInit() {

  }

  public close(): void {
    this.dialogRef.close();
  }


}
