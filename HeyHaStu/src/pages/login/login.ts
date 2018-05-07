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
    this.form = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }

  login() {
    this.baseService.postData("/admin/login", { data: this.form.value }, (data) => {
      window.localStorage.setItem('username', data.code);
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
