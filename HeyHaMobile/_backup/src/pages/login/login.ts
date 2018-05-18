import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { JPush } from '@jiguang-ionic/jpush';
import {JmessageChenyu} from "jmessage-chenyu";
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import { BaseService } from '../../module/baseService.service';
import { IMService } from '../../module/imService.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  form;

  constructor(
    public jMessageChenyu: JmessageChenyu,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public baseService: BaseService,
    public imService: IMService,
    public jpush: JPush
  ) {
    const username = window.localStorage.getItem('username');
    const password = window.localStorage.getItem('password');
    this.form = new FormGroup({
      username: new FormControl(username, Validators.required),
      password: new FormControl(password, Validators.required)
    });
  }

  login() {
    this.baseService.postData("/admin/login", { data: this.form.value }, (data) => {
      window.localStorage.setItem('username', data.code);
      window.localStorage.setItem('password', this.form.value.password);
      this.jpush.setAlias({ sequence: 1, alias: data.code });
      this.imService.login(data.code);
      this.imService.addClickMessageNotificationListener((msg) => {
        this.navCtrl.push('ChatPage', {
          username: msg.from.username
        });
      })
      this.navCtrl.push('TabsPage');
    });
  }

}
