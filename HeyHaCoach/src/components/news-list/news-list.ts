import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the NewListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'news-list',
  templateUrl: 'news-list.html'
})
export class NewsListComponent {

  public newsList = [{
    id: '12',
    date: '2012-2-2',
    imgUrl: 'https://tac-cdn.zhongan.com/care/user_image/iphoto.JPG',
    title: '这是大新闻啊',
    source: '联盟发布'
  }, {
    id: '123',
    date: '2012-2-2',
    imgUrl: 'https://tac-cdn.zhongan.com/care/user_image/iphoto.JPG',
    title: '这是大新闻啊',
    source: '联盟发布'
  }];

  constructor(public navCtrl: NavController) {

  }

  goNewsDetail(id) {
    console.log(id);
    // this.navCtrl.push();
  }

}
