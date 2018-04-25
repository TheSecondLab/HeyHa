import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
/**
 * Generated class for the RemindListAllComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'remind-list-all',
  templateUrl: 'remind-list-all.html'
})
export class RemindListAllComponent {

  data;
  @Input() list;

  constructor(public navCtrl: NavController) {

  }
  
  ngOnChanges(changes) {
    this.data = changes.list.currentValue;

  }

  navTo(page) {
    this.navCtrl.push(page);
  }
}
