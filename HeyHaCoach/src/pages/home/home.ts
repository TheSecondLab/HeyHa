import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JPush } from '@jiguang-ionic/jpush';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import { BaseServiceJson } from '../../module/service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public dueToStuPage = 'StuListPage';
  public dueToStuTit = '到期提醒';
  public newsListPage = 'NewsListPage';
  public newsListTit = '热点资讯';
  
  constructor(public navCtrl: NavController, public jPush: JPush, public http: HttpClient, public navParams: NavParams, public baseService: BaseServiceJson) {
    this.loadRemindData();
    
  }

  // ionViewDidEnter() {
  loadRemindData() {
    // const res = this.http.get('http://dev.hu0572.cn/api/update')
    // .toPromise()
    // .then(response => {console.log(response)});
    // // console.log('res', res);
    // app/admin/member/getFastExpiryMember


    this.baseService.postData('/admin/member/getFastExpiryMember', {}).subscribe(data => {
      console.log(data);
      // this.item = JSON.stringify(data);
      
    }, error => {
      // let alert = this.alertCtrl.create({
      //   title: "Account Created",
      //   message: "error: " + JSON.stringify(error),
      //   buttons: [{
      //     text: 'Ok',
      //   }]
      // });
      // alert.present()
    });
    
  }

  navTo(page) {
    this.navCtrl.push(page);
  }

}
