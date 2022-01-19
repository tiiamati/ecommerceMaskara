import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cart } from './cart.model';
import { Product } from '../products/product/product.model';
import { CartItem } from './cart-item.model';
import { Observable } from 'rxjs';
import { ProductRequest } from '../products/product/product-request.model';
import { CartRequest } from './cart-request.model';

const URL = 'https://ecommerce-mask.herokuapp.com/ecommerce/cart';

@Injectable({ providedIn: 'root' })
export class CartService {
  items: CartItem [] = [];
  productsRequest: ProductRequest[];

  constructor(private http: HttpClient){}

  create(cart: Cart): Observable<any> {
    
    return this.http.post<Cart>(URL, cart);
  }

  clear (){
    this.items = [];
  }

  addItem(item:Product){
    let foundItem = this.items.find((mItem)=> mItem.item.id === item.id);

    if (foundItem){
      this.increasyQty(foundItem);
    }else {
      this.items.push(new CartItem(item));
    }
  }

  removeItem(item:CartItem){
    this.items.splice(this.items.indexOf(item),1);
  }

  total ():number{
    return this.items
    .map(item => item.value())
    .reduce((prev,value) => prev+value, 0);
  }

  increasyQty(item: CartItem){
    item.quantity = item.quantity +1;
  }

  decreasyQty(item: CartItem){
    item.quantity = item.quantity -1;
    if(item.quantity === 0){
      this.removeItem(item);
    }
  }
}