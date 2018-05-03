import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { BaseService } from '../../module/baseService.service';
/**
 * Generated class for the NewsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-detail',
  templateUrl: 'news-detail.html',
})
export class NewsDetailPage {
  articleData = {
    name: '',
    point: '',
    photoKeyUrl: '',
    releasetimeStr: '',
    content: ''
  };
  constructor(public navCtrl: NavController, private navParams: NavParams, private baseService: BaseService) {
  }

  ionViewWillEnter() {
    this.loadData();
  }

  loadData() {
    const item = this.navParams.get('item');
    this.baseService.postData('/admin/sysactivity/oneactivity', { data: {id: item.id} }, (data)=> {
      this.articleData = data;

    });
  }

}
