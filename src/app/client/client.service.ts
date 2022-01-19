import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ProductRequest } from '../products/product/product-request.model';
import { Client } from './client.model';

const URL = 'https://ecommerce-mask.herokuapp.com/ecommerce/clients/login';

@Injectable({ providedIn: 'root' })
export class ClientService {
  login: Client;
  productsRequest: ProductRequest[];

  constructor(private http: HttpClient){}

  validateUser(login: Client): Observable<any> {
    console.log(login);
    return this.http.post<Client>(URL, login);
  }
}