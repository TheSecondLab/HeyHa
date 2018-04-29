import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Content } from 'ionic-angular';

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

  studentList = [];
  items = [];
  size = 10;
  page = 1;
  total;
  constructor(
    public navCtrl: NavController,
    public baseService: BaseService,
    public alertCtrl: AlertController,
    public navParams: NavParams) {
  }

  ngOnInit() {
    this.loadStudentList();
  }

  loadStudentList() {
    this.baseService.postData('/admin/member/getExpiryMemberList', { data: { size: this.size, page: this.page } }, (data)=> {
      this.studentList = data.content;
      this.total = data.totalPages;
    });
    
  }

  doInfinite(infiniteScroll) {
    if (+this.total === 1) {
      infiniteScroll.enable(false); 
    }
    this.page = this.page + 1;
    this.baseService.postData('/admin/member/getExpiryMemberList', { data: { size: this.size, page: this.page } }, (data)=> {
      infiniteScroll.complete();
      this.studentList = this.studentList.concat(data.content);

      if (data.totalPages == this.page) {
        infiniteScroll.enable(false);   //没有数据的时候隐藏 ion-infinate-scroll
      }

    });

  }

}
