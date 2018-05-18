import { Component } from '@angular/core';

/**
 * Generated class for the TraceListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'trace-list',
  templateUrl: 'trace-list.html'
})
export class TraceListComponent {

  text: string;

  constructor() {
    console.log('Hello TraceListComponent Component');
    this.text = 'Hello World';
  }

}
