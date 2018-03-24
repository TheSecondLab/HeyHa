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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  tab1Root = MyTaskPage;

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainPage');
  }

}
