import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { StModalPostPageComponent } from '../../components/st-modal-post-page/st-modal-post-page';
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
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    public baseService: BaseService) {
  }

  openModal(characterNum) {
    let modal = this.modalCtrl.create(StModalPostPageComponent, characterNum);
    modal.onDidDismiss(data => {
      this.loadData();
    });
    modal.present();
  }
  ionViewWillEnter() {
    this.viewCtrl.setBackButtonText('返回');
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
