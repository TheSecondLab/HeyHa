import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JPush } from '@jiguang-ionic/jpush';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
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
    this.baseService.postData("/admin/login", { data: this.form.value }, () => {
      this.navCtrl.push('TabsPage');
    });
  }
  

}
