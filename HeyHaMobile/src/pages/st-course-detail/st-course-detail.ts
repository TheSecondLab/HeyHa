import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { BaseService } from '../../module/baseService.service';

/**
 * Generated class for the CourseDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-st-course-detail',
  templateUrl: 'st-course-detail.html',
})
export class StCourseDetailPage {
  courseDetail = [];
  dateStr = '';
  isTask = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public baseService: BaseService) {
  }

  showContent(e) {
    const div = e.currentTarget;
    if (div.className.indexOf('hidden') > 0) {
      div.className = div.className.replace('hidden', '')
    } else {
      div.className = `${div.className} hidden`;
    }
  }

  ionViewWillEnter() {
    this.viewCtrl.setBackButtonText('返回');
    const courseId =this.navParams.get('id');
    
    const dateStrs = this.navParams.get('dateStr').split('-');
    this.dateStr = dateStrs[0] + '年' + dataStrs[1] + '月' + dataStrs[2];
    
    this.isTask = this.navParams.get('isTask');
    this.loadData(courseId);
  }

  loadData(id) {
    this.baseService.postData('/admin/clazzSource/getStudentClazzSourceDetail', { data: { id } }, (data)=> {
      this.courseDetail = data;
    });
  }

  completeTask(id) {
    this.baseService.postData('/admin/clazzSource/completeClazzSource', { data: { id } }, (data)=> {
      this.loadData(id);
    });
  }

}
