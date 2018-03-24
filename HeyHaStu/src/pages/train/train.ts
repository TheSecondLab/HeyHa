import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MyTaskPage } from '../my-task/my-task';

/**
 * Generated class for the TrainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-train',
  templateUrl: 'train.html',
})
export class TrainPage {
  segmentsArray = ['myTask','process'];
  segmentModel: string = this.segmentsArray[0];
  constructor(public navCtrl: NavController) {
  }
}
