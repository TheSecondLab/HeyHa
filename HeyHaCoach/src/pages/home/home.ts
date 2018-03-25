import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public dueToStuPage = 'StuListPage';
  public dueToStuTit = '到期提醒';
  public newsListPage = 'NewsListPage';
  public newsListTit = '热点资讯';
  constructor(public navCtrl: NavController) {

  }

  navTo(page) {
    this.navCtrl.push(page);
  }

}
