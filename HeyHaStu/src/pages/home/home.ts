import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BaseService } from '../../module/baseService.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  item = '';
  newsList = [];
  banners = [];

  constructor(public navCtrl: NavController, public baseService: BaseService) {

  }

  ionViewWillEnter() {
    this.loadData();
  }

  loadData() {
    this.baseService.multiReq({
      requests: [{
        url: '/admin/sysactivity/threeunactivity',
        option: { data: {} }
      },{
        url: '/admin/sysactivity/sysactivity',
        option: { data: {} }
      }],
      onSuccess: (datas) => {
        this.newsList = datas[0];
        this.banners = datas[1];
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
    // this.baseService.postData('/admin/unactivity'， { data: {} }, (data) => {

    // });
  }

}
