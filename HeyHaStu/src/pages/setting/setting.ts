import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  items = [
    '修改密码',
    '退出登录'
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

}
