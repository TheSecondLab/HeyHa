import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { ModalPostPageComponent } from '../../components/modal-post-page/modal-post-page';

import { BaseService } from '../../module/baseService.service';

/**
 * Generated class for the ClassDynamicListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-class-dynamic-list',
  templateUrl: 'class-dynamic-list.html',
})
export class ClassDynamicListPage {

  dynamicList = [];
  classId;
  classTitle;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public baseService: BaseService,
    public modalCtrl: ModalController) {
  }

  openModal() {
    let modal = this.modalCtrl.create(ModalPostPageComponent, { classId: this.classId });
    modal.onDidDismiss(data => {
      this.loadPageData();
    })
    modal.present();
  }


  ionViewWillEnter() {
    this.classId = this.navParams.get('item').id;
    this.classTitle = this.navParams.get('item').name;
    this.loadPageData();
  }
  
  loadPageData() {
    this.baseService.postData('/admin/dynamic/getDynamicListByClazz', { data: { clazzId: this.classId } }, (data)=> {
      this.dynamicList = data;
    });
  }

  deleteDynamic(id) {
    this.baseService.postData('/admin/dynamic/deleteDynamic', { data: {id}, hideLoading: true }, (data)=> {
      this.loadPageData();
    });
  }
}

