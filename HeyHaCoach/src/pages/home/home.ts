import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { JPush } from '@jiguang-ionic/jpush';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import { BaseService } from '../../module/baseService.service';

declare var cordova:any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public dueToStuPage = 'StuListPage';
  public dueToStuTit = '到期提醒';
  public newsListPage = 'NewsListPage';
  public newsListTit = '热点资讯';
  
  newsList = [];
  remindList = [];
  bannerList = [];
  studentName;
  constructor(
    public navCtrl: NavController,
    public jPush: JPush,
    public http: HttpClient,
    public navParams: NavParams,
    public baseService: BaseService,
    private alertCtrl: AlertController
  ) {
    
  }

  ionViewWillEnter() {
    this.loadRemindData();
  }


  loadRemindData() {
    this.baseService.multiReq({
      requests: [{
        // 到期会员
        url: '/admin/member/getFastExpiryMember',
        option: { data: {} }
      },{
        // 热点资讯
        url: '/admin/sysactivity/threeunactivity',
        option: { data: {} }
      },{
        // 公告
        url: '/admin/sysactivity/sysactivity',
        option: { data: {} }
      }],
      onSuccess: (datas) => {
        this.remindList = datas[0];
        this.newsList = datas[1];
        this.bannerList = datas[2];
      }
    });

  }

  navTo(page) {
    if (page === 'TaskPage') {
      this.navCtrl.parent.select(1);
      return;
    }
    this.navCtrl.push(page);
  }
  
  navToNews(item) {
    this.navCtrl.push('NewsDetailPage', {
      item
    });
  }

  openLink(url) {
    var ref = cordova.InAppBrowser.open(url, '_blank', 'location=yes');
  }

  searchStudent() {
    this.navCtrl.push('SearchStudentPage', { studentName: this.studentName })
  }

}
