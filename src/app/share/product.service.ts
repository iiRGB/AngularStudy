import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
   products: Product[] = [
    new Product(1, 'first', 1.99, 1.5, 'This is the first Product', ['电子', '3C']),
    new Product(2, 'second', 1.99, 2.5, 'This is the first Product', ['电子', '3C']),
    new Product(3, 'third', 1.99, 3.5, 'This is the first Product', ['电子', '3C']),
    new Product(4, 'third', 1.99, 4, 'This is the first Product', ['电子', '3C']),
    new Product(5, 'third', 1.99, 3, 'This is the first Product', ['电子', '3C']),
    new Product(6, 'third', 1.99, 5, 'This is the first Product', ['电子', '3C'])
  ];

   comments: Comment[] = [
    new Comment(1, 1, '2017-02-23 23:23:22', 'Tom', 3, '一般般'),
    new Comment(2, 1, '2017-02-23 23:23:22', 'Jack', 2, '一般般'),
    new Comment(3, 1, '2017-02-23 23:23:22', 'Simon', 4, '一般般'),
    new Comment(4, 2, '2017-02-23 23:23:22', 'Jerry', 5, '一般般'),
  ]
  constructor() { }

  getProducts() {
    return this.products;
  }

  getProduct(id: number): Product {

     return this.products.find((product: Product) => product.id === id);
  }

  getCommentForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId === id);
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
  ) {}
}

export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) {}
}
