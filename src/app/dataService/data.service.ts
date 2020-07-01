import { Injectable } from '@angular/core';
import { Cart } from '../cart/cart.model';
import { LoginComponent } from '../login/login.component';
import { Client } from '../client/client.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cart: Cart;
  private login: Client;
  constructor() { }

  setCart(cart: Cart) {
    this.cart = cart;
  }
  getCart() {
    return this.cart;
  }

  setLogin(login: Client) {
    this.login = login;
  }
  getLogin() {
    return this.login;
    ;
  }
}
