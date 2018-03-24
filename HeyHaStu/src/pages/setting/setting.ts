import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  items = [{
    desc: '修改密码',
    key: 1
  }, {
    desc: '退出登录',
    key: 2
  }];

  itemSelected(item) {
    if (item.key === 1) {
      this.navCtrl.push('ModifiedPassworkPage');
    }
  }


}
