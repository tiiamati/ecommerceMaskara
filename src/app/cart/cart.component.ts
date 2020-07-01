import { Component, OnInit } from '@angular/core';

import { Cart } from './cart.model';
import { CartService } from './cart.service';
import { Client } from '../client/client.model';
import { CartItem } from './cart-item.model';
import { ProductRequest } from '../products/product/product-request.model';
import { Router } from '@angular/router';
import { DataService } from '../dataService/data.service';

@Component({
  selector: 'mk-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  cart: Cart = new Cart();
  
  constructor(
    private cartService: CartService,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

  items():any[] {
    return this.cartService.items;
  }

  clear(){
    this.cartService.clear();
  }

  addItem(item:any){
    this.cartService.addItem(item);
  }

  removeItem(item:any) {
    this.cartService.removeItem(item);
  }

  total():number {
    return this.cartService.total();
  }

  createCart(items: CartItem[]) {
    this.cart.products = items.map(p => {
      return new ProductRequest(p.item, p.quantity)
    })
    this.cart.client = new Client(1);
    
    this.cartService.create(this.cart).subscribe(r => {
      this.dataService.setCart(r);
      this.router.navigateByUrl('/receipt', {
        state: {cart: r}
      });
    });

    
  }
}
