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
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public baseService: BaseService,
    public modalCtrl: ModalController) {
  }

  openModal(characterNum) {
    let modal = this.modalCtrl.create(ModalPostPageComponent, characterNum);
    modal.present();
  }


  ngOnInit() {
    this.loadPageData();
  }
  
  loadPageData() {
    this.baseService.postData('/admin/dynamic/getOneDynamic', { data: { id: this.navParams.get('item').id } }, (data)=> {
      this.dynamicList = data;
    });
  }

  zan(id) {
    this.baseService.postData('/admin/dynamic/zanDynamic', { data: {id}, hideLoading: true }, (data)=> {
      this.loadPageData();
    });
  }

  deleteDynamic(id) {
    this.baseService.postData('/admin/dynamic/deleteDynamic', { data: {id}, hideLoading: true }, (data)=> {
      this.loadPageData();
    });
  }
}

