import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { AppVersion } from '@ionic-native/app-version';

import { JPush } from '@jiguang-ionic/jpush';
import { JmessageChenyu } from "jmessage-chenyu";

import { LoginPage } from '../pages/login/login';
import { BaseService } from '../module/baseService.service';

declare var cordova:any;
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(
    private jMessageChenyu: JmessageChenyu,
    private androidPermissions: AndroidPermissions,
    platform: Platform, statusBar: StatusBar,
    public baseService: BaseService,
    public appVersion: AppVersion,
    splashScreen: SplashScreen,
    public alertCtrl: AlertController,
    private jpush: JPush
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      // setTimeout(() => {
      //   navigator.splashscreen.hide();
      // }, 1000);

      const versions = platform.versions();
      if (versions.android && versions.android.major < 7) {
        const alert = this.alertCtrl.create({
          message: JSON.stringify(`您手机的当前版本为${versions.android.str}, 本应用暂不支持该安卓版本，请前往升级或等待app更新。为您带来的不便，尽请谅解`)
        })
        alert.present();
        return;
      }

      this.appVersion.getVersionNumber().then(data => {

        this.baseService.postData('/admin/updateEdition', { data: { name: data } }, (data) => {
          if (!data) return;
          if (data.isUpgrade && platform.is('android')) {
            cordova.InAppBrowser.open(data.url, '_blank', 'location=yes')
            return;
          }
          let alert = this.alertCtrl.create({
            title: '提示',
            message: '请更新最新版本',
            buttons: ['确定']
          });
          alert.present();
        })
      }, error => console.error(error => {
        //获取当前版本号失败进行的操作
      }));

      statusBar.styleDefault();
      splashScreen.hide();
      this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
      this.jMessageChenyu.init({ isOpenMessageRoaming: true });
      this.jpush.init();



    });
  }
}
