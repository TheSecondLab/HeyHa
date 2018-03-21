import { Component } from '@angular/core';

/**
 * Generated class for the ReminderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'reminder',
  templateUrl: 'reminder.html'
})
export class ReminderComponent {

  text: string;

  constructor() {
    console.log('Hello ReminderComponent Component');
    this.text = 'Hello World';
  }

}
