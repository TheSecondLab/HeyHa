import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public baseService: BaseService) {
  }
  ionViewWillEnter() {
    this.loadData();
  }

  loadData() {
    this.baseService.postData('/admin/dynamic/getDynamicListByClazz', { data: {} }, (data)=> {
      this.dynamicList = data;
    });
  }

  zan(id) {
    this.baseService.postData('/admin/dynamic/zanDynamic', { data: {id}, hideLoading: true }, (data)=> {
      this.loadData();
    });
  }
}

