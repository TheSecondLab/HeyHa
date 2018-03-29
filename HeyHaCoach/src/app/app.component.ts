import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { JPush } from '@jiguang-ionic/jpush';
import { Device } from '@ionic-native/device';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(
    public platform: Platform,
    public push:Push,
    public jPush: JPush,
    statusBar: StatusBar,
    splashScreen: SplashScreen
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      //根据不同平台实现消息推送功能
      console.log(this.platform.is('ios'));
      

      if(this.platform.is('ios')){
        this.initPushNotification();
      }else if(this.platform.is('android')){
        this.jPush.init();
        this.androidGetRegId();

        // this.jPush.openNotification()
        // .subscribe( res => {
        //   console.log('收到推送');
        //   console.log(res)
        // });
  
        // this.jPush.receiveNotification()
        //   .subscribe( res => {
        //     console.log('收到推送');
        //     console.log(res)
        // });
  
        // this.jPush.receiveMessage()
        //   .subscribe( res => {
        //     console.log('收到推送');
        //     console.log(res)
        // });
      }else{
        //...
      }
    });
  }


  //Android端获取RegestrationId，用于消息推送
  androidGetRegId(){
    this.jPush.getRegistrationID()
    .then(regId => {
      console.log('********', regId)
      // this.storage.set('regId', regId);
    })
    .catch(err => alert(err))
  }

  //IOS端消息推送函数
  initPushNotification() { 
    if(!this.platform.is('cordova')) {
      console.warn('Push notifications only work on a real device');
        return;
      }
}

}