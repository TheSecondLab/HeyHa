import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController, ViewController } from 'ionic-angular';

import { IMService } from '../../module/imService.service';
import { Utils } from '../../module/util';
import { BaseService } from '../../module/baseService.service';
import { PostClassMessageComponent } from '../../components/post-class-message/post-class-message';

import {JmessageChenyu} from "jmessage-chenyu";

@IonicPage()
@Component({
  selector: 'page-my-chat',
  templateUrl: 'my-chat.html',
})
export class MyChatPage {


  public tabIndex = 1;

  chatHistory = [];
  classList = [];
  sendClasses = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public baseService: BaseService,
    public imService: IMService,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    public jMessageChenyu: JmessageChenyu,
    public util: Utils
  ) {
  }

  changeTab(idx) {
    this.tabIndex = idx;
  }

  navTo(url, username) {
    this.navCtrl.push(url, {
      username
    });
  }

  ionViewWillEnter() {
    this.viewCtrl.setBackButtonText('返回');

    this.loadData();
  }

  loadData() {
    this.chatHistory = [];
    this.baseService.multiReq({
      requests: [{
        // 获取聊天关系
        url: '/admin/chart/relation',
        option: { data: {} }
      },{
        // 获取教练下的班级
        url: '/admin/clazz/getAllClass',
        option: { data: {} }
      }],
      onSuccess: (datas) => {
        // this.alertCtrl.create({message: JSON.stringify(datas[0])}).present()
        datas[0].forEach((relation) => {
          this.imService.getConversation(relation.username).then((conversation) => {
            const msg = {
              username: relation.username,
              image: relation.photoUrl,
              name: conversation.title,
              latestMessage: conversation.latestMessage.type === 'text' ? conversation.latestMessage.text : '[类型不支持预览]',
              date: this.util.formatDate(conversation.latestMessage.createTime, 'yyyy/MM/dd hh:mm:ss'),
              nickname: relation.nickname
            };

            this.chatHistory.push(msg);
          })
        });

        this.classList = datas[1];

      }
    });
  }

  selectItem(id) {
    const active = [];
    this.classList = this.classList.map((item) => {

      if(item.id == id) {
        item.status = !item.status;
        item.status && active.push(item.id);
        return item;
      }
      item.status && active.push(item.id);
      return item;
    });

    this.sendClasses = active;

    // let alert = this.alertCtrl.create({
    //   message: JSON.stringify(active)
    // })
    // alert.present()
  }

  openModal() {
    if(!this.sendClasses.length) {
      let alert = this.alertCtrl.create({
        title: '提示',
        message: '您还没有选择班级哦~',
        buttons: ['确定']
      });
      alert.present();
      return;
    }
    let modal = this.modalCtrl.create(PostClassMessageComponent, { classIds: this.sendClasses });
    modal.onDidDismiss(data => {
      this.loadData();
      this.sendClasses = [];
    })
    modal.present();
  }


}
