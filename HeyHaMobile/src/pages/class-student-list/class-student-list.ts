import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';

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

  // classId;
  classMsg: any;
  studentList: any;

  constructor(
    public navCtrl: NavController,
    public baseService: BaseService,
    public alertCtrl: AlertController,
    public viewCtrl: ViewController,
    public navParams: NavParams) {
  }


  ionViewWillEnter() {
    this.viewCtrl.setBackButtonText('返回');
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
