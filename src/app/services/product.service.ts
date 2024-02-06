// product.service.ts

import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): Product[] {
    return [
      new Product(1, 'Product 1', 'Description for Product 1', 'assets/images/logo.png', '20'),
      new Product(2, 'Product 2', 'Description for Product 2', 'assets/images/logo.png', '30')
    ];
  }
}
