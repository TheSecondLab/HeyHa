import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BaseService } from '../../module/baseService.service';

/**
 * Generated class for the CourseDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-course-detail',
  templateUrl: 'course-detail.html',
})
export class CourseDetailPage {
  courseDetail = [];
  dateStr = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public baseService: BaseService) {
  }

  showContent(e) {
    const div = e.currentTarget;
    if (div.className.indexOf('hidden') > 0) {
      div.className = div.className.replace('hidden', '')
    } else {
      div.className = `${div.className} hidden`;
    }
  }

  ngOnInit() {
    const courseId =this.navParams.get('id');
    this.dateStr = this.navParams.get('dateStr');
    this.loadData(courseId);
  }

  loadData(id) {
    this.baseService.postData('/admin/clazzSource/getStudentClazzSourceDetail', { data: { id } }, (data)=> {
      this.courseDetail = data;
    });
  }

  completeTask(id) {
    this.baseService.postData('/admin/clazz/completeClazzSource', { data: { id } }, (data)=> {
      this.loadData(id);
    });
  }

}
