import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { JPush } from '@jiguang-ionic/jpush';
import {JmessageChenyu} from "jmessage-chenyu";

// import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
// import { MyPointPage } from '../pages/my-point/my-point';

import { AndroidPermissions } from '@ionic-native/android-permissions';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(
    private jMessageChenyu: JmessageChenyu,
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private androidPermissions: AndroidPermissions,
    private jpush: JPush,
    public alertCtrl: AlertController
  ) {
    platform.ready().then(() => {
      const versions = platform.versions();
      if (versions.android && versions.android.major < 7) {
        const alert = this.alertCtrl.create({
          message: JSON.stringify(`您手机的当前版本为${versions.android.str}, 本应用暂不支持该安卓版本，请前往升级或等待app更新。为您带来的不便，尽请谅解`)
        })
        alert.present();
        return;
      }
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE, this.androidPermissions.PERMISSION.CAMERA]);
      this.jMessageChenyu.init({ isOpenMessageRoaming: true })
        // .then(()=> {
        //   const alert = this.alertCtrl.create({
        //     message: 'jMessageChenyu'
        //   })
        //   alert.present();
        // }).catch(e=> {
        //   const alert = this.alertCtrl.create({
        //     message: JSON.stringify(e),
        //     title: 'jMessageChenyu'
        //   })
        //   alert.present();
        // });
      this.jpush.init()
        // .then(()=> {
        //   const alert = this.alertCtrl.create({
        //     message: 'jpushinit'
        //   })
        //   alert.present();
        // }).catch(e=> {
        //   const alert = this.alertCtrl.create({
        //     message: JSON.stringify(e),
        //     title: 'jpush'
        //   })
        //   alert.present();
        // });

    });
  }
}
