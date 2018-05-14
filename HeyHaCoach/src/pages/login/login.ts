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
    const username = window.localStorage.getItem('user');
    const password = window.localStorage.getItem('password');
    this.form = new FormGroup({
      username: new FormControl(username, Validators.required),
      password: new FormControl(password, Validators.required)
    });
  }

  login() {
    this.baseService.postData("/admin/login", { data: this.form.value }, (data) => {
      window.localStorage.setItem('username', data.code);
      window.localStorage.setItem('user', this.form.value.username);
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
    });
  }

}
