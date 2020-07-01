import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from './product.model';
import { Client } from 'src/app/client/client.model';

@Component({
  selector: 'mk-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent(){
    this.add.emit(this.product);
  }
}
