import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Content } from 'ionic-angular';
import { IMService } from '../../module/imService.service';
import { MultipleUpLoadService } from '../../module/multipleUpdate.service';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

// import { JmessageChenyu } from "jmessage-chenyu";

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

  constructor(
    public imService: IMService,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public uploadService: MultipleUpLoadService
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
      this.loadMessage(currentUser, this.chatHistrory.length + 1);
    }
  }

  ionViewWillEnter() {
    const username = this.navParams.get('username');

    this.loadMessage(username);
    this.imService.createConversation(username);
    this.imService.addReceiveMessageListener(this.receiveMsgListen);
  }

  ionViewDidEnter() {

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
      isMine: msg.isSend,
      imageUrl: '',
      content: msg.type === 'text' ? msg.text: msg.thumbPath,
      type: msg.type
    })).reverse();
    this.chatHistrory = arr;

    this.scrollToBottom();
  }

  loadMessage(username,length?) {
    this.imService.getHistoryMsg(username, length || 50).then(messages => {
      this.pushToArray(messages);
    });
  }

  newMessage(msg) {
    this.chatHistrory.push({
      isMine: msg.isSend,
      imageUrl: '',
      content: msg.type === 'text' ? msg.text: msg.thumbPath,
      type: msg.type
    });
    this.scrollToBottom();
  }

  focus(e) {

    let appEl = <HTMLElement>(document.getElementsByClassName('scroll-content')[0]);
    appEl.style.paddingBottom = '600px';
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
      this.imService.sendImageMsg(username, path).then((msg) => {
        this.newMessage(msg);
      });
    });
  }

}
