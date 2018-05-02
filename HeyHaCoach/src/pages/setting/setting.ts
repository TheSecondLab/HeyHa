import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BaseService } from '../../module/baseService.service';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public baseService: BaseService) {
  }

  
  navTo(page) {
    this.navCtrl.push(page)
  }

  logout() {
    this.baseService.postData('/admin/logout', { data: {} }, ()=> {
      this.navCtrl.push('LoginPage');
    });
  }

}
