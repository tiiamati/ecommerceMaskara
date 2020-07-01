import { Product } from 'src/app/products/product/product.model';
import { Client } from '../client/client.model';
import { ProductRequest } from '../products/product/product-request.model';

export class Cart {
    id: number;
    products: ProductRequest[];
    client: Client;
    value: number;
    status: string;
}