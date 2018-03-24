
import { NavController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController) {
  }

  navTo(page) {
    this.navCtrl.push(page)
  }

}
