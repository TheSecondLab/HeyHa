import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { JPush } from '@jiguang-ionic/jpush';

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

  constructor(public navCtrl: NavController, public jPush: JPush, public baseService: BaseService) {
    this.form = new FormGroup({
      username: new FormControl("CFTA18A001", Validators.required),
      password: new FormControl("123456", Validators.required)
    });
  }

  login() {
    this.baseService.postData("/login", { data: this.form.value }, () => {
      this.navCtrl.push('TabsPage');
    });
  }

}
