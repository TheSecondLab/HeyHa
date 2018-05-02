import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { BaseService } from '../../module/baseService.service';

/**
 * Generated class for the ClassStudentListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-class-student-list',
  templateUrl: 'class-student-list.html',
})
export class ClassStudentListPage {

  public list = [{
    imgUrl: 'assets/imgs/iphoto.JPG',
    name: '金田',
    no: 'CFTA110500',
    date: '2012年10月12号',
    attendence: 4
  }, {
    imgUrl: 'assets/imgs/iphoto.JPG',
    name: '金田',
    no: 'CFTA110500',
    date: '2012年10月12号',
    attendence: 4
  }, {
    imgUrl: 'assets/imgs/iphoto.JPG',
    name: '金田',
    no: 'CFTA110500',
    date: '2012年10月12号',
    attendence: 4
  }];

  // classId;
  classMsg: any;
  studentList: any;

  constructor(
    public navCtrl: NavController,
    public baseService: BaseService,
    public alertCtrl: AlertController,
    public navParams: NavParams) {
  }


  ionViewWillEnter() {
    this.loadClassStucent();
  }


  navTo(item) {
    this.navCtrl.push('StuImformationPage', {
      item
    });
  }

  loadClassStucent() {
    this.baseService.postData('/admin/clazz', { data: { clazzId: this.navParams.get('classId') } }, (data)=> {
      this.studentList = data;
     
    });
  
  }

}
