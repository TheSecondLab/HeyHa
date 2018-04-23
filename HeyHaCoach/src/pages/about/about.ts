import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  userInfo: any;
  constructor(
    public alertCtrl: AlertController,
    private navParams: NavParams,
    public navCtrl: NavController) {
      this.userInfo = this.navParams.data;
  }

  // ngOnInit() {
  //   this.userInfo = this.navParams.data;

  // }
  navTo(page) {
    this.navCtrl.push(page, {
      userInfo: this.userInfo
    })
  }

}
