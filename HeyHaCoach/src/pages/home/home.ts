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

  constructor(
    public navCtrl: NavController,
    public jPush: JPush,
    public http: HttpClient,
    public navParams: NavParams,
    public baseService: BaseService,
    private alertCtrl: AlertController
  ) {
    
  }
  

  ngOnInit() {
    this.loadRemindData();
  }

  loadRemindData() {
    // 到期会员
    this.baseService.postData('/admin/member/getFastExpiryMember', { data: {} }, (data)=> {
      this.remindList = data;

    });

    // 热点资讯
    this.baseService.postData('/admin/sysactivity/threeunactivity', { data: {} }, (data)=> {
      this.newsList = data;
    });

    // 公告
    this.baseService.postData('/admin/sysactivity/sysactivity', { data: {} }, (data)=> {
      this.bannerList = data;
    });
    
  }

  navTo(page) {
    this.navCtrl.push(page);
  }
  
  navToNews(item) {
    this.navCtrl.push('NewsDetailPage', {
      item
    });
  }

}
