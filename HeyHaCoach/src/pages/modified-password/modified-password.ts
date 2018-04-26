import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import { BaseService } from '../../module/baseService.service';

/**
 * Generated class for the ModifiedPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modified-password',
  templateUrl: 'modified-password.html',
})
export class ModifiedPasswordPage {
  form;
  confirmPwd = false;

  constructor(
    public navCtrl: NavController,
    public baseService: BaseService,
    public alertCtrl: AlertController,
    public navParams: NavParams) {
    this.form = new FormGroup({
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
      newPassword: new FormControl('', Validators.required)
    });
  }

  setConfirmPwd() {
    this.confirmPwd = false
  }

  modifiedPwd() {
    const { confirmPassword, newPassword } = this.form.value;
    if (confirmPassword !== newPassword) {
      this.confirmPwd = true;
      return;
    }
    this.baseService.postData("/admin/updatePwd", { data: this.form.value }, (data) => {
      let alert = this.alertCtrl.create({
        title: '修改成功！',
        buttons: ['确定']
      });
      alert.present();
      this.navCtrl.pop();
    });
  }
  



}
