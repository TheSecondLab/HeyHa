import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BaseService } from '../../module/baseService.service';

/**
 * Generated class for the StuListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stu-list',
  templateUrl: 'stu-list.html',
})
export class StuListPage {

  studentList;

  constructor(
    public navCtrl: NavController,
    public baseService: BaseService,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StuListPage');
  }

  ngOnInit() {
    this.loadStudentList();
  }

  loadStudentList() {
    this.baseService.postData('/admin/member/getExpiryMemberList', { data: {} }, (data)=> {
      this.studentList = data.content;
    });
    
  }

}
