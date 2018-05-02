import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the PersonalInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal-info',
  templateUrl: 'personal-info.html',
})
export class PersonalInfoPage {

  userInfo: any;
  infos: any;
// 性别 入职时间 联系电话 身份证号 详细住址 职级 段位
  

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.userInfo = this.navParams.get('userInfo');
    this.infos = [{
      label: '性别',
      value: this.userInfo.sexStr
    },{
      label: '入职时间',
      value: this.userInfo.inTimeStr
    },{
      label: '联系电话',
      value: this.userInfo.tel
    },{
      label: '身份证号',
      value: this.userInfo.userId
    },{
      label: '详细住址',
      value: this.userInfo.address
    },{
      label: '职级',
      value: this.userInfo.jobLevel
    },{
      label: '段位',
      value: this.userInfo.levelName
    }]
  }


}
