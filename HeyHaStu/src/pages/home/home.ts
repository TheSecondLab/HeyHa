import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BaseService } from '../../module/baseService.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  item = '';
  newsList = [];

  constructor(public navCtrl: NavController, public baseService: BaseService) {

  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.baseService.postData('/admin/threeunactivity', { data: {} }, (data)=> {
      // let alert = this.alertCtrl.create({
      //   title: "data",
      //   message: JSON.stringify(data),
      //   buttons: [{
      //     text: 'Ok',
      //   }]
      // });
      // alert.present()
      this.newsList = data;
    });
  }

  titleClick() {
    this.navCtrl.push('NewsListPage');
    // this.baseService.postData('/admin/unactivity'， { data: {} }, (data) => {

    // });
  }

}
