import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'reminder',
  templateUrl: 'reminder.html'
})
export class ReminderComponent {
  @Input() data = {
    status: false,
    imgUrl: '',
    name: ''
  };

  constructor(public navCtrl: NavController) {
  }

  navTo() {
    this.navCtrl.push('TrainPage');
  }
}
