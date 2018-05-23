import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, AlertController, ViewController } from 'ionic-angular';

import { BaseService } from '../../module/baseService.service';

/**
 * Generated class for the StuImformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stu-imformation',
  templateUrl: 'stu-imformation.html',
})
export class StuImformationPage {

  // studentId;
  studentMsg;
  studentName;
  studentPhoto;
  username;

  constructor(
    public navCtrl: NavController, 
    public alertCtrl: AlertController, 
    public baseService: BaseService, 
    public viewCtrl: ViewController,
    public navParams: NavParams) {
    // this.studentId = this.navParams.get('item').id
  }

  ionViewWillEnter() {
    this.viewCtrl.setBackButtonText('返回');

    this.loadPageData();
  }

  loadPageData() {
    this.baseService.postData('/admin/member/getMemberByMemberId', { data: { id: this.navParams.get('item').id } }, (data)=> {
      this.studentMsg = [
        { label: '学习道馆', value: data.taekwondoName },
        { label: '到期时间', value: data.expirationTimeEndStr },
        { label: '性别', value: data.sexStr },
        { label: '出生年月', value: data.birthdayStr },
        { label: '会员编号', value: data.code },
        { label: '联系电话', value: data.tel },
        { label: '身份证号', value: data.idCard },
        { label: '详细住址', value: data.address },
        { label: '单位名称', value: data.school }
      ];
      this.username = data.code;
      this.studentName = data.name;
      this.studentPhoto = data.photoUrl;
    });

  }

  navTo(url, username) {
    this.navCtrl.push(url, {
      username
    });
  }



}
