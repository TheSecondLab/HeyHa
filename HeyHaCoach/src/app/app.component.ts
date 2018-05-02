import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AndroidPermissions } from '@ionic-native/android-permissions';

// import { JPush } from '@jiguang-ionic/jpush';
import {JmessageChenyu} from "jmessage-chenyu";

import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(
    private jMessageChenyu: JmessageChenyu,
    private androidPermissions: AndroidPermissions,
    platform: Platform, statusBar: StatusBar,
    splashScreen: SplashScreen,
    // jpush: JPush
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);

      this.jMessageChenyu.init({ isOpenMessageRoaming: true }); // 初始化

    });
  }
}
