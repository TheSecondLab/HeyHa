import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { BaseService } from '../../module/baseService.service';

declare var cordova:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  item = '';
  newsList = [];
  banners = [];
  reminder = {
    status: false,
    imgUrl: '',
    name: ''
  };
  courseProgress = {};

  constructor(public navCtrl: NavController, public baseService: BaseService, public alertCtrl: AlertController) {

  }

  ionViewWillEnter() {
    this.loadData();
  }

  openLink(url) {
    var ref = cordova.InAppBrowser.open(url, '_blank', 'location=yes');
  }

  loadData() {
    this.baseService.multiReq({
      requests: [{
        url: '/admin/sysactivity/threeunactivity',
        option: { data: {} }
      },{
        url: '/admin/sysactivity/sysactivity',
        option: { data: {} }
      },{
        url: '/admin/clazzSource/getStudentCompleteStatus',
        option: { data: {} }
      },{
        url: '/admin/stucoached',
        option: { data: {} }
      },{
        url: '/admin/clazzSource/getNewStudentClazzSource',
        option: { data: {} }
      }],
      onSuccess: (datas) => {
        this.newsList = datas[0];
        this.banners = datas[1];
        this.reminder.status = datas[2] === "UNCOMPLETE" ? false: true;
        this.reminder.imgUrl = datas[3].photoUrl;
        this.reminder.name = datas[3].name;
        this.courseProgress = datas[4];

      }
    })
    // this.baseService.postData('/admin/sysactivity/threeunactivity', { data: {} }, (data)=> {
    //   this.newsList = data;
    // });

    // this.baseService.postData('/admin/sysactivity/sysactivity', { data: {} }, (data) => {
    //   this.banners = data
    // })
  }

  navToNews(item) {
    this.navCtrl.push('NewsDetailPage', {
      item
    });
  }


  titleClick() {
    this.navCtrl.push('NewsListPage');
  }

  navToCourse(id, dateStr, isTask) {
    this.navCtrl.push('CourseDetailPage', {
      id,
      dateStr,
      isTask
    });
  }


}
