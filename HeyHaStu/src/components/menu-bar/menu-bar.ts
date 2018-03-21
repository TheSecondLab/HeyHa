import { Component } from '@angular/core';

/**
 * Generated class for the MenuBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu-bar',
  templateUrl: 'menu-bar.html'
})
export class MenuBarComponent {

  text: string;

  constructor() {
    console.log('Hello MenuBarComponent Component');
    this.text = 'Hello World';
  }

}
