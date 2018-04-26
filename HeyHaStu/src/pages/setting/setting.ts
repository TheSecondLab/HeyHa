import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BaseService } from '../../module/baseService.service';
@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public baseService: BaseService) {
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

    if(item.key === 2) {
      this.baseService.postData('/admin/logout', { data: {} }, ()=> {
        this.navCtrl.push('LoginPage');
      });
    }
  }


}
