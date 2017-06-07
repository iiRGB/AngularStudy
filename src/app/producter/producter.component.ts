import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producter',
  templateUrl: './producter.component.html',
  styleUrls: ['./producter.component.css']
})
export class ProducterComponent implements OnInit {

  private products: Array<Product>;

  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, 'first', 1.99, 1.5, 'This is the first Product', ['电子', '3C']),
      new Product(1, 'second', 1.99, 2.5, 'This is the first Product', ['电子', '3C']),
      new Product(1, 'third', 1.99, 3.5, 'This is the first Product', ['电子', '3C']),
      new Product(1, 'third', 1.99, 4, 'This is the first Product', ['电子', '3C']),
      new Product(1, 'third', 1.99, 3, 'This is the first Product', ['电子', '3C']),
      new Product(1, 'third', 1.99, 5, 'This is the first Product', ['电子', '3C'])
    ];
  }

}

export class Product {
  constructor(
    public id: number ,
    public title: string ,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ){}
}
