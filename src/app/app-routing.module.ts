import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.components';
import { ReceiptComponent } from './receipt/receipt.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'products', component: ProductsComponent
  },
  {
    path:'receipt', component: ReceiptComponent
  },
  {
    path: 'login', component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
