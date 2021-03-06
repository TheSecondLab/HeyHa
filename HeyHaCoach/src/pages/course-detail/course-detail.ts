import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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
  courseDetail = {
    videoUrl: '',
    coverUrl: '',
    claim: ''
  };
  courseName = '';
  // videoUrl = '';
  claim = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public baseService: BaseService,
    public alertCtrl: AlertController
  ) {
  }
  //
  // showContent(e) {
  //   const div = e.currentTarget;
  //   if (div.className.indexOf('hidden') > 0) {
  //     div.className = div.className.replace('hidden', '')
  //   } else {
  //     div.className = `${div.className} hidden`;
  //   }
  // }

  ionViewWillEnter() {

    // this.videoUrl = course.videoPlayUrl;
    // this.claim = course.claim;
    this.loadData(this.navParams.get('item').capitalId);
    this.courseName = this.navParams.get('item').name;

  }

  loadData(id) {
    this.baseService.postData('/admin/capital/onecapital', { data: { capitalId: id } }, (data)=> {
      this.courseDetail = data;
    });
  }




}
