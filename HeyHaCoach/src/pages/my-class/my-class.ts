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

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyClassPage');
  }

  ngOnInit() {
    this.loadPageData();
  }
  
  loadPageData() {

    // 获得这个教练下所管理的班级总数测试,班级人数总和，班级到期人数总和
    this.baseService.postData('/admin/member/getCount', { data: {} }, (data)=> {
      this.countData = data;
    });
  
    // 所管理班级中到期人数总和
    this.baseService.postData('/admin/clazz/getAllClass', { data: {} }, (data)=> {
      this.classList = data;
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
