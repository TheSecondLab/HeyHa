import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'reminder',
  templateUrl: 'reminder.html'
})
export class ReminderComponent {

  constructor(public navCtrl: NavController) {
  }

  navTo() {
    console.log('123')
    this.navCtrl.push('TrainPage');
  }
}
