import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';

import { BaseService } from '../../module/baseService.service';

/**
 * Generated class for the ClassSystemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-course-system',
  templateUrl: 'course-system.html',
})
export class CourseSystemPage {

  courseList = [];
  typeList = [];
  levelList = [];
  constructor(
    public navCtrl: NavController,
    public baseService: BaseService,
    public alertCtrl: AlertController,
    public viewCtrl: ViewController,
    public navParams: NavParams) {
  }


  ionViewWillEnter() {
    this.viewCtrl.setBackButtonText('返回');
    this.loadPageData();
  }

  loadPageData() {
    this.baseService.multiReq({
      requests: [{
        url: '/admin/clazzSource/getCapital',
        option: { data: {} }
      },{
        url: '/admin/capital/getMaterial',
        option: { data: {} }
      }],
      onSuccess: (datas) => {
        this.courseList = datas[0];
        this.baseService.postData('/admin/level/getLevel', { data: {}, hideLoading: true }, (levelList)=> {
          this.typeList = datas[1].map((item) => ({ key: item.id, value: item.name}));
          this.typeList = [{key: 'all', value: '所有类型'}].concat(this.typeList);
          this.levelList = levelList.map((item) => ({ key: item.id, value: item.name}));
          this.levelList = [{key: 'all', value: '所有级别'}].concat(this.levelList);
        });
      }
    });
  }

  getParentData(dataFormDrop) {
    
    const levelId = dataFormDrop[0].key === 'all' ? '' : dataFormDrop[0].key;
    const materialId = dataFormDrop[1].key === 'all' ? '' : dataFormDrop[1].key;
    this.baseService.postData('/admin/clazzSource/getCapital',
      { data: {
        levelId,
        materialId,
        types: 'FODDER'
      } },
      (data)=> {
        this.courseList = data;
      });
  }


}
