import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '../cart/cart.model';
import { DataService } from '../dataService/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mk-receipt',
  templateUrl: './receipt.component.html'
})
export class ReceiptComponent implements OnInit {

    cart: Cart;
    
    constructor(
      private dataService: DataService, 
      private router: Router
      ) {
        const nav = this.router.getCurrentNavigation();
        this.cart = nav.extras.state.cart;
      }

    ngOnInit(): void {
      if (!this.cart){
        this.cart = this.dataService.getCart()
      }
    }

}
