import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyPointPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-point',
  templateUrl: 'my-point.html',
})
export class MyPointPage {

  items = [{
    desc: '签到',
    date: '2018-07-01',
    point: '+60'
  },{
    desc: '签到',
    date: '2018-07-01',
    point: '+60'
  },{
    desc: '签到',
    date: '2018-07-01',
    point: '+60'
  }]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPointPage');
  }

}
