import { Product } from '../products/product/product.model';

export class CartItem {

  constructor(public item: Product,
              public quantity: number =1
            ) {};

  value(): number{
    return this.item.value * this.quantity;
  }

  name(): string{
    return this.item.name;
  }
}
