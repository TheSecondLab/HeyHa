import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { BaseService } from '../../module/baseService.service';

/**
 * Generated class for the MyClassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-class',
  templateUrl: 'my-class.html',
})
export class MyClassPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public baseService :BaseService) {
  }

  countData: any = {};
  classList: any = [];

  ionViewWillEnter() {
    this.loadPageData();
  }
  
  loadPageData() {
    this.baseService.multiReq({
      requests: [{
        // 获得这个教练下所管理的班级总数测试,班级人数总和，班级到期人数总和
        url: '/admin/member/getCount',
        option: { data: {} }
      },{
        // 所管理班级中到期人数总和
        url: '/admin/clazz/getAllClass',
        option: { data: {} }
      }],
      onSuccess: (datas) => {
        this.countData = datas[0];
        this.classList = datas[1];
      }
    });

  }

  navTo(item) {
    if (item) {
      this.navCtrl.push('ClassStudentListPage', {
        classId: item.id
      });
      return;
    }
    this.navCtrl.push('ClassDueStudentPage');
    
  }

}
