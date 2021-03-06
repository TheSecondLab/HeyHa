import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPostPageComponent } from '../../components/modal-post-page/modal-post-page';
import { BaseService } from '../../module/baseService.service';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  eventList= [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public baseService: BaseService) {
  }

  openModal(characterNum) {
    let modal = this.modalCtrl.create(ModalPostPageComponent, characterNum);
    modal.onDidDismiss(data => {
      this.loadData();
    });
    modal.present();
  }
  ionViewWillEnter() {
    this.loadData();
  }

  loadData() {
    this.baseService.postData('/admin/growthRecord/getGrowthRecord', { data: {} }, (data)=> {
      this.eventList = data;
    });
  }

  deleteEvent(id) {
    this.baseService.postData('/admin/growthRecord/deleteGrowthRecord', { data: { id }, hideLoading: true }, (data)=> {
      this.loadData();
    });
  }
}
