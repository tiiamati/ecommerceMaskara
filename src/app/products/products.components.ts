import { Component, OnInit } from '@angular/core';

import { Product } from './product/product.model';
import { ProductsService } from './products.service';
import { Observable } from 'rxjs';
import { Client } from '../client/client.model';
import { DataService } from '../dataService/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mk-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  products: Observable<Product[]>;

  constructor(
      private productsService: ProductsService
    ) {
     }

  ngOnInit() {
    this.products = this.productsService.list();
  }
}
