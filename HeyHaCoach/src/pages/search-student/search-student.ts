import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { BaseService } from '../../module/baseService.service';

/**
 * Generated class for the SearchStudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-student',
  templateUrl: 'search-student.html',
})
export class SearchStudentPage {

  studentName;
  stuList = [];
  constructor(
    public navCtrl: NavController,
    public baseService: BaseService,
    public alertCtrl: AlertController,
    public navParams: NavParams) {
  }

  ngOnInit() {
    this.studentName = this.navParams.get('studentName');
    this.loadSearchData(this.studentName);
  }
  
  searchByKeyword(e) {
    this.loadSearchData(this.studentName);

  }

  loadSearchData(name) {
    // 到期会员
    this.baseService.postData('/admin/member/getMember', { data: { nameorcode: name } }, (data)=> {
      this.stuList = data;
    });
  }

  navTo(item) {
    this.navCtrl.push('StuImformationPage', {
      item
    })
  }
  

}
