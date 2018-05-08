import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { ModalPostPageComponent } from '../../components/modal-post-page/modal-post-page';
import { BaseService } from '../../module/baseService.service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  userInfo = {};
  constructor(
    public alertCtrl: AlertController,
    private navParams: NavParams,
    public baseService: BaseService,
    public modalCtrl: ModalController,
    public navCtrl: NavController) {
  }

  navTo(page) {
    this.navCtrl.push(page, {
      userInfo: this.userInfo
    })
  }

  ionViewWillEnter() {
    this.loadPageInfo();
  }

  openModal() {
    let modal = this.modalCtrl.create(ModalPostPageComponent, {userInfo: this.userInfo});
    modal.present();
  }

  loadPageInfo() {
    this.baseService.postData('/admin/coached', { data: {} }, (data)=> {
      this.userInfo = data;
    });
  }

}
