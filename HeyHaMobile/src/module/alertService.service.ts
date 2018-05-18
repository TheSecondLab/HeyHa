import { Injectable } from '@angular/core';
import { App, AlertController } from 'ionic-angular';
// import { LoginPage } from '../pages/login/login';

@Injectable()
export class AlertService {

  preseted: boolean;
  constructor(public app: App, public alertCtrl: AlertController) {
    this.preseted = false
  }

  showTimeout() {
    if(this.preseted) {
      return;
    }

    this.preseted = true;

    let alert = this.alertCtrl.create({
      title: "错误",
      message: '登陆过期，请重新登陆',
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.preseted = false;
          this.app.getRootNav().setRoot('LoginPage');
        }
      }]
    });
    alert.present();
  }
}
