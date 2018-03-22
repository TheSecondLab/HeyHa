import { Component } from '@angular/core';

/**
 * Generated class for the PersonalInfoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'personal-info',
  templateUrl: 'personal-info.html'
})
export class PersonalInfoComponent {

  text: string;

  constructor() {
    console.log('Hello PersonalInfoComponent Component');
    this.text = 'Hello World';
  }

}
