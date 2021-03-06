import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';

import { BaseService } from '../../module/baseService.service';

/**
 * Generated class for the CourseProgressListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-course-progress-list',
  templateUrl: 'course-progress-list.html',
})
export class CourseProgressListPage {
  classTitle = '';
  dataList = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public viewCtrl: ViewController,
    public baseService: BaseService) {
  }

  ngOnInit() {
    this.viewCtrl.setBackButtonText('返回');
    this.classTitle = this.navParams.get('item').name;
    this.loadPageData();
  }
  
  loadPageData() {
    
    this.baseService.postData('/admin/clazzSource/getEmployeeClazzSource',
      { data: {
        clazzId: this.navParams.get('item').id,
        type: 'COURSE'
      }}, 
      (data)=> {
        if (!data) return;
        this.dataList = data.map(item => {
          const dateStrs = item.dateStr.split('-');
          item.dateStr = dateStrs[0] + '年' + dateStrs[1] + '月' + dateStrs[2] + '日';
          return item
        });
    });
  }

  navTo(item) {
    this.navCtrl.push('CouseVideoListPage', { item });
  }

}
