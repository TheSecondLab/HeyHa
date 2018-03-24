import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPostPageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
// @IonicPage()
@Component({
  selector: 'modal-post-page',
  templateUrl: 'modal-post-page.html'
})
export class ModalPostPageComponent {

  constructor(
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
