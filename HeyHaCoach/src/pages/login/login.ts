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
    this.form = new FormGroup({
      username: new FormControl("zdl", Validators.required),
      password: new FormControl("123456", Validators.required)
    });
  }

  login() {
    this.baseService.postData("/admin/login", { data: this.form.value }, (data) => {
      window.localStorage.setItem('username', data.code);

      this.jPush.setAlias({ sequence: 1, alias: data.username });
      this.imService.login(data.username);
      this.imService.addClickMessageNotificationListener((msg) => {
        this.navCtrl.push('ChatPage', {
          username: msg.from.username
        });
      })
      this.navCtrl.push('TabsPage', {
        userInfo: data
      });
    });
  }

}
