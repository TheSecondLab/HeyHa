import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/**
 * Generated class for the NewsListThumbComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'news-list-thumb',
  templateUrl: 'news-list-thumb.html'
})
export class NewsListThumbComponent {

  public newsList = [{
    imgUrl: 'https://tac-cdn.zhongan.com/care/user_image/iphoto.JPG',
    title: '士大夫撒旦是阿斯蒂芬史蒂夫',
    date: '2012-2-4',
    id: 123,
    source: '联盟发布'
  }, {
    imgUrl: 'https://tac-cdn.zhongan.com/care/user_image/iphoto.JPG',
    title: '士大夫撒旦是阿斯蒂芬史蒂夫',
    date: '2012-2-4',
    id: 123,
    source: '联盟发布'
  }, {
    imgUrl: 'https://tac-cdn.zhongan.com/care/user_image/iphoto.JPG',
    title: '士大夫撒旦是阿斯蒂芬史蒂夫',
    date: '2012-2-4',
    id: 123,
    source: '联盟发布'
  }, {
    imgUrl: 'https://tac-cdn.zhongan.com/care/user_image/iphoto.JPG',
    title: '士大夫撒旦是阿斯蒂芬史蒂夫',
    date: '2012-2-4',
    id: 123,
    source: '联盟发布'
  }]

  constructor(public navCtrl: NavController) {

  }

  navTo(page) {
    this.navCtrl.push(page);
  }

}
