import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BaseService } from '../../module/baseService.service';

/**
 * Generated class for the CardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
})
export class CardsPage {
  cards = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public baseService: BaseService) {
  }

  ionViewWillEnter() {
    this.loadData();
  }

  loadData() {
    this.baseService.postData('/admin/memberCardMapping/getmemberCardMapping', { data: {} }, (data)=> {
      this.cards = data;
    });
  }

}
