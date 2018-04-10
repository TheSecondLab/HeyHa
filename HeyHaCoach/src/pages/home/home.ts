import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public dueToStuPage = 'StuListPage';
  public dueToStuTit = '到期提醒';
  public newsListPage = 'NewsListPage';
  public newsListTit = '热点资讯';
  constructor(public navCtrl: NavController, private http:HttpClient) {

  }

  ionViewDidEnter() {
    const res = this.http.get('http://dev.hu0572.cn/api/update')
    .toPromise()
    .then(response => {console.log(response)});
    // console.log('res', res);
    

  }

  navTo(page) {
    this.navCtrl.push(page);
  }

}
