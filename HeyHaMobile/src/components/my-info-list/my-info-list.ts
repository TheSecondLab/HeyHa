import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController) {
  }

  navTo(page) {
    this.navCtrl.push(page)
  }

}
