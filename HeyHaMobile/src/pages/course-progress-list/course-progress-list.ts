import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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
    public baseService: BaseService) {
  }

  ngOnInit() {
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
        this.dataList = data;
    });
  }

  navTo(item) {
    this.navCtrl.push('CouseVideoListPage', { item });
  }

}
