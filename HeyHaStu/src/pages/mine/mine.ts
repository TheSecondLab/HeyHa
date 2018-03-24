import { Component } from '@angular/core'; // Angular核心组件
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-mine', // 使用组件的名称
  templateUrl: 'mine.html' // HTML
  // styleUrls: ['mine.scss'] // 样式
})
export class MinePage {
  i: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.i++;
  }

  navTo(page) {
    this.navCtrl.push(page);
  }
}
