import { Component, Input } from '@angular/core';

/**
 * Generated class for the SubTitleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sub-title',
  templateUrl: 'sub-title.html'
})
export class SubTitleComponent {

  @Input() title: string;
  @Input() value: string;


  constructor() {
    console.log('Hello SubTitleComponent Component');
    this.title = 'Hello World';
    console.log(this, this.value);

  }

}
