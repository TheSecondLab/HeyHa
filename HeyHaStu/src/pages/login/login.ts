import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JPush } from '@jiguang-ionic/jpush';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public jPush: JPush) {
  }

  login() {
    // this.navCtrl.push('TabsPage');
    this.jPush.init().then((data) => {
      alert(data)
      this.navCtrl.push('TabsPage');
    }).catch(e=> alert(e));
  }

}
