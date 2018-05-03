import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { IMService } from '../../module/imService.service';
import { BaseService } from '../../module/baseService.service';

import {JmessageChenyu} from "jmessage-chenyu";

@IonicPage()
@Component({
  selector: 'page-my-chat',
  templateUrl: 'my-chat.html',
})
export class MyChatPage {


  public tabIndex = 1;

  chatHistory = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public baseService: BaseService,
    public imService: IMService,
    public alertCtrl: AlertController,
    public jMessageChenyu: JmessageChenyu
  ) {
  }

  navTo(url, username) {
    this.navCtrl.push(url, {
      username
    });
  }

  ionViewWillEnter() {
    this.loadData();
  }

  loadData() {
    this.chatHistory = [];
    this.baseService.postData('/admin/chart/relation', { data: {} }, (data)=> {
      data.forEach((relation) => {
        this.imService.getConversation(relation.username).then((conversation) => {
        // this.imService.getConversation('admin').then((conversation) => {
          const msg = {
            // username: 'admin',
            username: relation.username,
            image: relation.photoUrl,
            name: conversation.title,
            latestMessage: conversation.latestMessage.type === 'text' ? conversation.latestMessage.text : '[类型不支持预览]',
            date: '待添加'
          };

          this.chatHistory.push(msg);
        })
      });
      // const promiseArr = data.map(relation => this.imService.getConversation(relation.username));
      // Promise.all(promiseArr).then((data) => {
      //   let alert = this.alertCtrl.create({
      //     title: "123",
      //     message: JSON.stringify(data),
      //     buttons: [{
      //       text: 'Ok',
      //     }]
      //   });
      //   alert.present();
      // }).catch((e) => {
      //   let alert = this.alertCtrl.create({
      //     title: "错误",
      //     message: JSON.stringify(e),
      //     buttons: [{
      //       text: 'Ok',
      //     }]
      //   });
      // })

    });
    // this.imService.getHistoryMsg(null, null).then((data) => {
    //   let alert = this.alertCtrl.create({
    //     title: "123",
    //     message: JSON.stringify(data),
    //     buttons: [{
    //       text: 'Ok',
    //     }]
    //   });
    //   alert.present();
    // }).catch((e) => {
    //   let alert = this.alertCtrl.create({
    //     title: "错误",
    //     message: JSON.stringify(e),
    //     buttons: [{
    //       text: 'Ok',
    //     }]
    //   });alert.present();
    // })
  }
}
