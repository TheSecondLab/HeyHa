import { Component } from '@angular/core'; // Angular核心组件
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

}
