import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { BaseService } from '../../module/baseService.service';
interface Grade {
  imgUrl: string,
  desc: string,
  date: string,
  score: string
}

@IonicPage()
@Component({
  selector: 'page-grade-test',
  templateUrl: 'grade-test.html',
})
export class GradeTestPage {
  segmentsArray = ['tab1','tab2'];
  segmentModel: string = this.segmentsArray[0];
  levelList = [];
  segmentLevel = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public baseService: BaseService) {
  }

  ionViewWillEnter() {
    this.viewCtrl.setBackButtonText('返回');
    this.loadData();
  }

  loadData() {
    this.baseService.multiReq({
      requests: [{
        url: '/admin/level/getRankLevel',
        option: { data: {} }
      },{
        url: '/admin/level/getProductsegmentLevel',
        option: { data: {} }
      }],
      onSuccess: (datas) => {
        this.levelList = datas[0];
        this.segmentLevel = datas[1];
      }
    })


    // this.baseService.postData('/admin/level/getRankLevel', { data: {} }, (data)=> {
    //   this.levelList = data;
    // });

    // this.baseService.postData('/admin/level/getProductsegmentLevel', { data: {} }, (data) => {
    //   this.segmentLevel = data
    // })
  }
}
