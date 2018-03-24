import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  title: string;


  constructor(public navCtrl: NavController) {

    this.title = '热点资讯';

  }

  navTo() {
    this.navCtrl.push('NewsListPage');
  }

}
