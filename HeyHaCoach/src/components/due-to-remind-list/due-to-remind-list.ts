import { Component, Input } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

/**
 * Generated class for the DueToRemindListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

interface listItem {
  name: string

  fate:string,

  photoKey:string,

  tel: string
}
@Component({
  selector: 'due-to-remind-list',
  templateUrl: 'due-to-remind-list.html'
})
export class DueToRemindListComponent {

  public data = [];
  @Input() pageName:string;
  @Input() list: listItem[];
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }


  ngOnChanges(changes) {
    this.data = changes.list.currentValue;

  }
  navTo(page) {
    this.navCtrl.push(page);
  }

}
