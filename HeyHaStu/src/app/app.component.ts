import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { JPush } from '@jiguang-ionic/jpush';
import {JmessageChenyu} from "jmessage-chenyu";

// import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
// import { MyPointPage } from '../pages/my-point/my-point';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(private jMessageChenyu: JmessageChenyu, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, jpush: JPush) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.jMessageChenyu.init({ isOpenMessageRoaming: true })
      //用户注册。
      let obj ={username: 'robin1', password: '123456'}
      //obj对应的参数详情请看文档
      //https://github.com/jpush/jmessage-phonegap-plugin/wiki/APIs
      this.jMessageChenyu.register(obj)
            .then(() => {
              console.log("注册成功，请登录！")
            })
            .catch((error) => {
              console.log("注册失败" + JSON.stringify(error))
            });
      //用户登录
      this.jMessageChenyu.login(obj).then(() =>{

          //代码

          console.log("login success");

          this.jMessageChenyu.createConversation({ type: 'single', username: 'robin2', appKey: '9e2471813200538bfe0c47e1' })
          .then(
            (conversation) => {
              // do something.
              this.jMessageChenyu.sendTextMessage({ type: 'single', username: 'robin2', appKey: '9e2471813200538bfe0c47e1',
                text: 'hello world', extras: {key1: 'value1'} })
            }
          ).catch ((error) => {
            var code = error.code
            var desc = error.description
          })
      })
      // this.jMessageChenyu.logout().then(
      //       //代码
      // )
      //获取用户信息
      this.jMessageChenyu.getMyInfo().then()
      // 此处省略很多方法... 详情对照https://github.com/jpush/jmessage-phonegap-plugin/wiki/APIs 方法名


    });
  }
}
