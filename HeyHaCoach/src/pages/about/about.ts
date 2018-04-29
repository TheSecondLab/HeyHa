import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ModalPostPageComponent } from '../../components/modal-post-page/modal-post-page';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  userInfo: any;
  constructor(
    public alertCtrl: AlertController,
    private navParams: NavParams,
    public modalCtrl: ModalController,
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

  openModal() {
    let modal = this.modalCtrl.create(ModalPostPageComponent);
    modal.present();
  }

}
