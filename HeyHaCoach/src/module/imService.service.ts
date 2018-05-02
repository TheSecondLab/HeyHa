import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from 'ionic-angular';
import { JmessageChenyu } from "jmessage-chenyu";

import { BaseService } from './baseService.service';

@Injectable()
export class IMService {

  hardCodePassword: string = '123456';
  appKey: string = 'b62940b22c4c70c0ee319808';

  constructor(
    public jMessageChenyu: JmessageChenyu,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public baseService: BaseService
  ) {}

  // private generateParam(type, code) {
  //   let obj = {
  //     appKey: this.appKey,
  //     type,
  //     username: '',
  //     groupId: ''
  //   };

  //   if(type === 'single'){
  //     obj.username = code;
  //   }
  //   if(type === 'group') {
  //     obj.groupId = code;
  //   }

  //   return obj;
  // }
  // public init(){
  //   this.jMessageChenyu.init({ isOpenMessageRoaming: true });
  // }

  public login(username) {
    let _username = username;
    if (_username.length < 4) {
      _username = `${_username}_jpush`;
    }

    return new Promise((resolve, reject) => {
      // let loading = this.loadingCtrl.create({
      //   spinner: 'crescent',
      //   content: '请稍后...'
      // });
      // loading.present();

      let obj = { username: _username, password: this.hardCodePassword };

      this.jMessageChenyu.login(obj).then(() =>{
        // loading.dismiss();
        resolve();
      }).catch((error) => {
        // loading.dismiss();
        reject(error.description);
      });
    });
  }

  public createConversation(username) {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: '请稍后...'
    });
    loading.present();

    this.baseService.postData('/admin/chart/connect', { data: { username }}, () => {});

    this.jMessageChenyu.createConversation({ type: 'single', appKey: this.appKey, username })
      .then(() => {
        loading.dismiss();
      }).catch ((error) => {
        loading.dismiss();
      })
  }

  public sendTextMsg(username, text) {
    // const param = this.generateParam(type, code);
    return this.jMessageChenyu.sendTextMessage({ type: 'single', appKey: this.appKey, username, text });
  }

  public sendImageMsg(username, path) {
    return this.jMessageChenyu.sendImageMessage({ type: 'single', appKey: this.appKey, username, path });
  }

  public getHistoryMsg(username, limit) {
    return this.jMessageChenyu.getHistoryMessages({ type: 'single', appKey: this.appKey, username, limit });
  }

  public getConversation(username) {
    let alert2 = this.alertCtrl.create({
      message: JSON.stringify(this.jMessageChenyu.getConversation({ type: 'single', appKey: this.appKey, username}))
    })
    alert2.present();
    return this.jMessageChenyu.getConversation({ type: 'single', appKey: this.appKey, username});
  }
}
