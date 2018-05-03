import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { BaseService } from '../../module/baseService.service';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public baseService: BaseService) {
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
        // const alert = this.alertCtrl.create({
        //   message: JSON.stringify('sss')
        // })
        // alert.present();
        // this.navCtrl.popToRoot();
        this.navCtrl.push(LoginPage);
      });
    }
  }


}
