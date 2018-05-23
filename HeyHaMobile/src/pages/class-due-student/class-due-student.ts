import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { BaseService } from '../../module/baseService.service';

/**
 * Generated class for the ClassDueStudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-class-due-student',
  templateUrl: 'class-due-student.html',
})
export class ClassDueStudentPage {

  constructor(
    public navCtrl: NavController,
    public baseService: BaseService,
    public viewCtrl: ViewController,
    public navParams: NavParams) {
  }

  stuList;

  ionViewWillEnter() {
    this.viewCtrl.setBackButtonText('返回');
    this.loadPageData();
  }

  loadPageData() {

    this.baseService.postData('/admin/member/getExpiryMember', { data: {} }, (data)=> {
      this.stuList = data;
    });
  }

  navTo(item) {
    this.navCtrl.push('DueDateStuPage', { item });
  }

}
