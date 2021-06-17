import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Category } from 'src/app/modals/category.model';


@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.scss']
})
export class CategorylistComponent implements OnInit {
  categoryInfoTable : Category[] = [];
  dataSource = new MatTableDataSource(this.categoryInfoTable);
  displayedColumns: string[] = ['name', 'action'];
  category: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private categoryService: CategoryService) {



  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this.getCategoryData();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  getCategoryData(){
    this.categoryService.getCategory().subscribe(res => {
      console.log(res);
      this.category = res;
      this.dataSource.data = this.category;
    })

  }

}
