import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Content, LoadingController } from 'ionic-angular';
import { IMService } from '../../module/imService.service';
import { MultipleUpLoadService } from '../../module/multipleUpdate.service';
import { BaseService } from '../../module/baseService.service';

import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';



@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  @ViewChild(Content) cnt: Content;

  content ='';
  chatHistrory = [];
  form;
  inputs;
  userImg;

  constructor(
    public imService: IMService,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public uploadService: MultipleUpLoadService,
    public loadingCtrl: LoadingController,
    public baseService: BaseService
  ) {
    this.form = new FormGroup({
      content: new FormControl("", Validators.required)
    });
    this.receiveMsgListen = this.receiveMsgListen.bind(this);
  }

  receiveMsgListen(msg) {
    // const alert = this.alertCtrl.create({
    //   message: JSON.stringify(msg)
    // });
    // alert.present();
    const currentUser = this.navParams.get('username');
    if(msg.from && currentUser === msg.from.username) {
      this.loadMessage(currentUser);
    }
  }

  ionViewWillEnter() {

    let doc = document.getElementById('zx');
    window.addEventListener('keyboardDidHide', function (e) {
      doc.style.height = '0px';

    });

    window.addEventListener('keyboardDidShow', function (e) {
      const keyboardHeight = JSON.parse(JSON.stringify(e)).keyboardHeight;
      doc.style.height = `${keyboardHeight}px`;

    });
    const username = this.navParams.get('username');

    this.baseService.postData('/admin/user/usernames', {
      data: {},
      array: {
        username: [username, window.localStorage.getItem('username')]
      }
    }, (data)=> {
      this.userImg = data;
    },
    (error)=> {
      const alert = this.alertCtrl.create({
        title:'error',
        message: JSON.stringify(error)
      })
      alert.present();
    });
    this.loadMessage(username);
    this.imService.createConversation(username);
    this.imService.addReceiveMessageListener(this.receiveMsgListen);
  }

  ionViewWillLeave() {
    this.imService.removeReceiveMessageListener(this.receiveMsgListen);
  }

  scrollToBottom() {
    setTimeout(() => {
      if(this.cnt.scrollToBottom){
          this.cnt.scrollToBottom(0);
      }
    },200)
  }

  pushToArray(msgArr) {
    const arr = msgArr.map(msg =>({
      username: msg.from.username,
      isMine: msg.isSend,
      imageUrl: '',
      content: msg.type === 'text' ? msg.text: msg.thumbPath,
      type: msg.type,
      avatarThumbPath: msg.from.avatarThumbPath
    })).reverse();
    this.chatHistrory = arr;

    this.scrollToBottom();
  }

  loadMessage(username,length?) {
    this.imService.getHistoryMsg(username, length || -1).then(messages => {
      // const alert = this.alertCtrl.create({
      //   message: JSON.stringify(messages.map(msg=>msg.from)),
      //   title: username
      // });
      // alert.present();
      this.pushToArray(messages.reverse());
    });
  }

  newMessage(msg) {
    this.chatHistrory.push({
      username: msg.from.username,
      isMine: msg.isSend,
      imageUrl: '',
      content: msg.type === 'text' ? msg.text: msg.thumbPath,
      type: msg.type
    });
    this.scrollToBottom();
  }

  sendMsg() {
    this.imService.sendTextMsg(this.navParams.get('username'), this.inputs).then(msg => {
      this.inputs = '';
      this.newMessage(msg);
    }).catch(e=>{
      let alert = this.alertCtrl.create({
        title: "错误",
        message: JSON.stringify(e),
        buttons: [{
          text: 'Ok',
        }]
      });
      alert.present();
    })
  }

  chooseImage() {
    const username = this.navParams.get('username');
    this.uploadService.chooseImage((path) => {
      let loading = this.loadingCtrl.create({
        spinner: 'crescent',
        content: '请稍后...'
      });
      loading.present();
      this.imService.sendImageMsg(username, path).then((msg) => {
        loading.dismiss();
        this.newMessage(msg);
      }).catch((e) => {
        loading.dismiss();
        let alert = this.alertCtrl.create({
          title: "错误",
          message: JSON.stringify(e),
          buttons: [{
            text: 'Ok',
          }]
        });
        alert.present();
      });
    });
  }

}
