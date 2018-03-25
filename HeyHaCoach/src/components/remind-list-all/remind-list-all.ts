import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/**
 * Generated class for the RemindListAllComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'remind-list-all',
  templateUrl: 'remind-list-all.html'
})
export class RemindListAllComponent {

  public list = [{
    imgUrl: 'https://tac-cdn.zhongan.com/care/user_image/iphoto.JPG',
    trace: '2',
    date: '2019-2-2',
    name: '金田',
    number: 'CFTA110500'
  }, {
    imgUrl: 'https://tac-cdn.zhongan.com/care/user_image/iphoto.JPG',
    trace: '2',
    date: '2019-2-2',
    name: '金田',
    number: 'CFTA110500'
  }, {
    imgUrl: 'https://tac-cdn.zhongan.com/care/user_image/iphoto.JPG',
    trace: '2',
    date: '2019-2-2',
    name: '金田',
    number: 'CFTA110500'
  }];

  constructor(public navCtrl: NavController) {

  }

  navTo(page) {
    this.navCtrl.push(page);
  }
}
