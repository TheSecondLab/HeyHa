import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BaseService } from '../../module/baseService.service';
/**
 * Generated class for the CoachInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coach-info',
  templateUrl: 'coach-info.html',
})
export class CoachInfoPage {

  cocheInfo: any = {

  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public baseService: BaseService) {
  }

  ionViewWillEnter() {
    this.loadData();
  }

  loadData() {
    this.baseService.postData('/admin/stucoached', { data: {} }, (data)=> {
      this.cocheInfo = data;
    });
  }

  navTo(username) {
    let _username = username;
    if(username.length < 4) {
      _username += '_jpush';
    }
    this.navCtrl.push('ChatPage', {
      username: _username
    })
  }

}
