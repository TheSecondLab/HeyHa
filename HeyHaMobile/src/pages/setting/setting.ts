import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { BaseService } from '../../module/baseService.service';
import { LoginPage } from '../login/login';

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

  constructor(
    public app: App,
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams, public baseService: BaseService) {
  }

  
  navTo(page) {
    this.navCtrl.push(page);
    
  }


  ionViewWillEnter() {
    this.viewCtrl.setBackButtonText('返回');
  }


  logout() {
    this.baseService.postData('/admin/logout', { data: {} }, ()=> {
      // this.navCtrl.push(LoginPage);
      // this.navCtrl.setRoot(LoginPage);
      this.app.getRootNav().setRoot(LoginPage);
    });
  }

}
