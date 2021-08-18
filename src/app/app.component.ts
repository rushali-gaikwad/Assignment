import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marvellous Infosystems';
  str : string = '';
  constructor()
  {

  }
  onKeyUp(value : string) : any
  {
    this.str = value + '';
  }
}
