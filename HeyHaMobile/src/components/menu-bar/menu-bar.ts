import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
  // growPage: any;

  constructor(public navCtrl: NavController) {
    // this.growPage = MyPointPage;
  }

  navTo(page) {
    this.navCtrl.push(page);
  }

}
