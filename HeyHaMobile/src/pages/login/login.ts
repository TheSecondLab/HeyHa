import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { JPush } from '@jiguang-ionic/jpush';
import { IMService } from '../../module/imService.service';

import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import { BaseService } from '../../module/baseService.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  form;

  constructor(
    public navCtrl: NavController,
    public imService: IMService,
    public jPush: JPush,
    public alertCtrl: AlertController,
    public baseService: BaseService) {
    const username = window.localStorage.getItem('username');
    const password = window.localStorage.getItem('password');
    this.form = new FormGroup({
      username: new FormControl(username, Validators.required),
      password: new FormControl(password, Validators.required)
    });
  }

  login() {
    this.baseService.postData("/admin/login", { data: this.form.value }, (data) => {
      if (data.username) {
      // if (data.loginType === 'EMPLOYEE') {
        console.log('Is coach');
        window.localStorage.setItem('username', data.username);
        // window.localStorage.setItem('user', this.form.value.username);
        window.localStorage.setItem('password', this.form.value.password);
        this.jPush.setAlias({ sequence: 1, alias: data.username });
        this.imService.login(data.username);
        this.imService.addClickMessageNotificationListener((msg) => {
          this.navCtrl.push('ChatPage', {
            username: msg.from.username
          });
        })
        this.navCtrl.setRoot('TabsPage', {
          userInfo: data
        });
      } else if (data.code) {
      // } else if (data.loginType === 'MEMBER') {
        console.log('Is student');
        window.localStorage.setItem('username', data.code);
        window.localStorage.setItem('password', this.form.value.password);
        this.jPush.setAlias({ sequence: 1, alias: data.code });
        this.imService.login(data.code);
        this.imService.addClickMessageNotificationListener((msg) => {
          this.navCtrl.push('ChatPage', {// TODO change to stu
            username: msg.from.username
          });
        })
        this.navCtrl.setRoot('StTabsPage');// TODO change to stu
      } else {
        this.alertCtrl.create({message:'账户类型错误， 请联系管理员'}).present();
      }
    });
  }

}
