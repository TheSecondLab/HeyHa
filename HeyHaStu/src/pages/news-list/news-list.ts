import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

import { BaseService } from '../../module/baseService.service';

@IonicPage()
@Component({
  selector: 'page-news-list',
  templateUrl: 'news-list.html',
})
export class NewsListPage {

  newsList: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public baseService: BaseService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.baseService.postData('/admin/sysactivity/unactivity', { data: {} }, (data)=> {
      this.newsList = data;

    });
  }
}
