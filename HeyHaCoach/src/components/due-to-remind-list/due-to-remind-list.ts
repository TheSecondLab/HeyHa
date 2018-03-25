import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the DueToRemindListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'due-to-remind-list',
  templateUrl: 'due-to-remind-list.html'
})
export class DueToRemindListComponent {

  public list = [];
  @Input() pageName:string;
  constructor(public navCtrl: NavController) {
    this.list = [{
      imgUrl: 'https://tac-cdn.zhongan.com/care/user_image/iphoto.JPG',
      name: '好的',
      date: '12'
    }, {
      imgUrl: 'https://tac-cdn.zhongan.com/care/user_image/iphoto.JPG',
      name: '好的',
      date: '12'
    }, {
      imgUrl: 'https://tac-cdn.zhongan.com/care/user_image/iphoto.JPG',
      name: '好的',
      date: '12'
    }, {
      imgUrl: 'https://tac-cdn.zhongan.com/care/user_image/iphoto.JPG',
      name: '好的',
      date: '12'
    }, {
      imgUrl: 'https://tac-cdn.zhongan.com/care/user_image/iphoto.JPG',
      name: '好的',
      date: '12'
    }, {
      imgUrl: 'https://tac-cdn.zhongan.com/care/user_image/iphoto.JPG',
      name: '好的',
      date: '12'
    }, {
      imgUrl: 'https://tac-cdn.zhongan.com/care/user_image/iphoto.JPG',
      name: '好的',
      date: '12'
    }]
  }

  navTo(page) {
    this.navCtrl.push(page);
  }

}
