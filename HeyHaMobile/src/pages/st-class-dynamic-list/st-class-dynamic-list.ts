import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, ViewController } from 'ionic-angular';
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
  selector: 'page-st-class-dynamic-list',
  templateUrl: 'st-class-dynamic-list.html',
})
export class StClassDynamicListPage {
  dynamicList = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    public baseService: BaseService) {
  }
  ionViewWillEnter() {
    this.viewCtrl.setBackButtonText('返回');

    this.loadData();
  }

  loadData() {
    this.baseService.postData('/admin/dynamic/getDynamicListByClazz', { data: {} }, (data)=> {
      this.dynamicList = data;
    });
  }

  zan(id) {
    this.baseService.postData('/admin/dynamic/zanDynamic', { data: {id}, hideLoading: false }, (data)=> {
      this.dynamicList = this.dynamicList.map((item) => {
        if(item.id == id) {
          item.zan = !item.zan;
        }
        return item
      })
    });
  }

  collect(id){
    this.baseService.postData('/admin/dynamic/collectDynamic', { data: {id}, hideLoading: false }, (data)=> {

      this.dynamicList = this.dynamicList.map((item) => {
        if(item.id == id) {
          item.collect = !item.collect;
        }
        return item;
      })
    });
  }
}

