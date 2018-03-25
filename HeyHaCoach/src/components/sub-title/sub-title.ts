import { Component, Input } from '@angular/core';
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

  @Input() title: string;
  @Input() pageName: string;

  constructor(public navCtrl: NavController) {
    
  }

  navTo(page) {
    this.navCtrl.push(page);
  }



}
