import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'css-grid-pt';
  isChecked = false;
  constructor() {}

  onClick() {
    return (this.isChecked = !this.isChecked);
  }
}
