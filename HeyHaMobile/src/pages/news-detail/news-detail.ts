import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';
import { BaseService } from './../../module/baseService.service';

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

  articleData = {};
  articleTitle: any;

  constructor(
    public navCtrl: NavController,
    public baseService: BaseService,
    public alertCtrl: AlertController,
    public viewCtrl: ViewController,
    public navParams: NavParams) {

    this.articleTitle = this.navParams.get('item').name;
    this.baseService.postData('/admin/sysactivity/oneactivity', { data: { id: this.navParams.get('item').id } }, (data)=> {
      this.articleData = data;
     
    });

  }

  ionViewWillEnter() {
    this.viewCtrl.setBackButtonText('返回');
  }

}
