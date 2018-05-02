import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
// import { JPush } from '@jiguang-ionic/jpush';
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
    // public jPush: JPush,
    public baseService: BaseService) {
    this.form = new FormGroup({
      username: new FormControl("zdl", Validators.required),
      password: new FormControl("123456", Validators.required)
    });
  }

  login() {
    this.baseService.postData("/admin/login", { data: this.form.value }, (data) => {
      // let alert = this.alertCtrl.create({
      //   title: "data",
      //   message: JSON.stringify(data.code),
      //   buttons: [{
      //     text: 'Ok',
      //   }]
      // });
      // alert.present();
      this.imService.login(data.username);
      this.navCtrl.push('TabsPage', {
        userInfo: data
      });
    });
  }

}
