import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Keyboard } from 'ionic-angular';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public keyboard: Keyboard,
    public navParams: NavParams) {
  }


}
