import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BaseService } from '../../module/baseService.service';
/**
 * Generated class for the MyPointPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-point',
  templateUrl: 'my-point.html',
})
export class MyPointPage {

  // items = [{
  //   desc: '签到',
  //   date: '2018-07-01',
  //   point: '+60'
  // },{
  //   desc: '签到',
  //   date: '2018-07-01',
  //   point: '+60'
  // },{
  //   desc: '签到',
  //   date: '2018-07-01',
  //   point: '+60'
  // }]

  pointDetail: any = {}
  pointList


  constructor(public navCtrl: NavController, public navParams: NavParams, public baseService: BaseService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.baseService.postData('/admin/member/getMemberIntegral', { data: {} }, (data)=> {
      this.pointDetail = data;
    });

    this.baseService.postData('/admin/member/getMemberIntegralList', { data: {} }, (data)=> {
      this.pointList = data;
    });
  }

}
