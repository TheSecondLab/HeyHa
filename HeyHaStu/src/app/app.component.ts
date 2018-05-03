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
