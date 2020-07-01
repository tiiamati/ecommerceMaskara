import { ProductRequest } from '../products/product/product-request.model';
import { Client } from '../client/client.model';

export class CartRequest {
    products: ProductRequest[];
    status: string;
    client: Client;
}