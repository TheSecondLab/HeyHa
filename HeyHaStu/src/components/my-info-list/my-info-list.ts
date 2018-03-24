import { Component } from '@angular/core';

/**
 * Generated class for the MyInfoListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'my-info-list',
  templateUrl: 'my-info-list.html'
})
export class MyInfoListComponent {

  text: string;

  constructor() {
    console.log('Hello MyInfoListComponent Component');
    this.text = 'Hello World';
  }

}
