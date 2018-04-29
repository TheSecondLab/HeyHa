import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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
    public navParams: NavParams) {
  }


  ngOnInit() {
    this.loadCourseList();
    this.loadType();
    // this.loadLevel()
  }

  loadCourseList() {
    this.baseService.postData('/admin/clazzSource/getCapital', { data: {} }, (data)=> {
      this.courseList = data;

    });
  }

  loadType() {
    this.baseService.postData('/admin/capital/getMaterial', { data: {} }, (typeList)=> {
      this.baseService.postData('/admin/level/getLevel', { data: {} }, (levelList)=> {
        this.typeList = typeList.map((item) => ({ key: item.id, value: item.name}));
        this.typeList = [{key: 'all', value: '所有组合'}].concat(this.typeList);
        this.levelList = levelList.map((item) => ({ key: item.id, value: item.name}));
        this.levelList = [{key: 'all', value: '所有级别'}].concat(this.levelList);
      });
      
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
