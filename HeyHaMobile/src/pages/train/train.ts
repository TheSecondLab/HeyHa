import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { BaseService } from '../../module/baseService.service';

@IonicPage()
@Component({
  selector: 'page-train',
  templateUrl: 'train.html',
})
export class TrainPage {
  segmentsArray = ['myTask','process'];
  segmentModel: string = this.segmentsArray[0];

  taskList = [];
  courseList = [];

  constructor(
    public navCtrl: NavController,
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
        url: '/admin/clazzSource/getStudentClazzSource',
        option: { data: { type: 'HOMEWORK' } }
      },{
        url: '/admin/clazzSource/getStudentClazzSource',
        option: { data: { type: 'COURSE' } }
      }],
      onSuccess: (datas) => {
        this.taskList = datas[0];
        this.courseList = datas[1];
      }
    })


    // this.baseService.postData('/admin/clazzSource/getStudentClazzSource', { data: { type: 'HOMEWORK' } }, (data)=> {
    //   this.taskList = data;
    // });

    // this.baseService.postData('/admin/clazzSource/getStudentClazzSource', { data: { type: 'COURSE' } }, (data) => {
    //   this.courseList = data
    // });
  }
}
