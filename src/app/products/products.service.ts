import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from './product/product.model';

const URL = 'http://localhost:8089/ecommerce/products';

@Injectable({ providedIn: 'root' })
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Product[]> {
    return this.http.get<Product[]>(URL);
  }

  create(): Observable<Product[]> {
    return this.http.get<Product[]>(URL + '/create');
  }
}