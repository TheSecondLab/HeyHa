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

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.baseService.postData('/admin/sysactivity/threeunactivity', { data: {} }, (data)=> {
      this.newsList = data;
    });

    this.baseService.postData('/admin/sysactivity/sysactivity', { data: {} }, (data) => {
      this.banners = data
    })
  }

  titleClick() {
    this.navCtrl.push('NewsListPage');
    // this.baseService.postData('/admin/unactivity'， { data: {} }, (data) => {

    // });
  }

}
