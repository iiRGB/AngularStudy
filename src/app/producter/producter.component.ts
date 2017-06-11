import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../share/product.service';
import {FormControl} from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-producter',
  templateUrl: './producter.component.html',
  styleUrls: ['./producter.component.css']
})
export class ProducterComponent implements OnInit {
  private products: Product[];

  private keyword: string;

  private titleFilter: FormControl = new FormControl();

  constructor(private productService: ProductService) {
    this.titleFilter.valueChanges
      .debounceTime(500)
      .subscribe(
        value => this.keyword = value
      );
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}


