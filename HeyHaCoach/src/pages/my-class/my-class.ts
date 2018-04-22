import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
    public baseService :BaseService) {
  }

  classCount: string;
  dueDateStudentCount: string;
  classList: Array<any> = [];

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyClassPage');
  }

  ngOnInit() {
    this.loadPageData();
  }
  
  loadPageData() {

    // 教练名下班级总和
    this.baseService.postData('/admin/clazz/getClazzCount', { data: {} }, (data)=> {
      this.classCount = data;
    });

    // 所管理班级中到期人数总和
    this.baseService.postData('/admin/member/getCountExpiryMember', { data: {} }, (data)=> {
      this.dueDateStudentCount = data;
    });

    // 所管理班级中到期人数总和
    this.baseService.postData('/admin/clazz/getAllClass', { data: {} }, (data)=> {
      this.classList = data;
    });

  }

  navTo(page) {
    this.navCtrl.push(page);
  }

}
