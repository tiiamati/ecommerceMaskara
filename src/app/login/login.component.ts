import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../dataService/data.service';
import { Client } from '../client/client.model';
import { ClientService } from '../client/client.service';

@Component({
  selector: 'mk-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  login: Client;

  constructor(
    private dataService: DataService,
    private router: Router,
    private clientService: ClientService
  ) {
    const nav = this.router.getCurrentNavigation();
  }

  ngOnInit() {
  }

  register(login) {

    if (login.form.value.email && login.form.value.password){
      this.clientService.validateUser(login.form.value).subscribe(r => {
        if (r) {
          console.log("logou");
          this.dataService.setLogin(login);
          this.router.navigateByUrl('/products', {
            state: { login: login.form.value }
          });
        }
      });
    }
  }

}
