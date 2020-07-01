import {Component, OnInit} from "@angular/core"

@Component({
  selector: 'mk-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Bem vindo ao Mascaras'

  constructor() { }

  ngOnInit() {
  }

}
