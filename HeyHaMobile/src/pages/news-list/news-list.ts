import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BaseService } from '../../module/baseService.service';

/**
 * Generated class for the NewsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-list',
  templateUrl: 'news-list.html',
})
export class NewsListPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public baseService: BaseService) {
  }
  newsList: any;

  ionViewWillEnter() {
    this.loadNewsListData();
  }

  loadNewsListData() {
    // 资讯列表
    this.baseService.postData('/admin/sysactivity/unactivity', { data: {} }, (data)=> {
      this.newsList = data;
    });

  }

}
