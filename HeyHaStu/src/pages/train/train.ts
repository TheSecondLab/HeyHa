import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { BaseService } from '../../module/baseService.service';


// interface Task {
//   imgUrl: string,
//   date: string,
//   desc: string,
//   id: string,
//   status: boolean
// }

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
  // tasks: Task[] = [{
  //   date: '20101211',
  //   imgUrl: '',
  //   desc: '',
  //   id: '',
  //   status: false
  // }];
  // courses: Task[] = [{
  //   date: '20101211',
  //   imgUrl: '',
  //   desc: '',
  //   id: '',
  //   status: false
  // }];

  constructor(public navCtrl: NavController, public baseService: BaseService) {
    // this.tasks = [{
    //   id: '1',
    //   date: '2020-02-02',
    //   desc: 'testtesttestt esttesttesttes ttesttesttesttest',
    //   status: true,
    //   imgUrl: 'assets/imgs/iphoto.JPG'
    // }, {
    //   id: '2',
    //   date: '2020-02-02',
    //   desc: '测试测试测试测试测试测试测试测试',
    //   status: true,
    //   imgUrl: 'assets/imgs/iphoto.JPG'
    // }];

    // this.courses = [{
    //   id: '1',
    //   date: '2020-02-02',
    //   desc: 'testtesttestt esttesttesttes ttesttesttesttest',
    //   imgUrl: 'assets/imgs/iphoto.JPG',
    //   status: false
    // }, {
    //   id: '2',
    //   date: '2020-02-02',
    //   desc: '测试测试测试测试测试测试测试测试',
    //   imgUrl: 'assets/imgs/iphoto.JPG',
    //   status: false
    // }];
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.baseService.postData('/admin/clazzSource/getStudentClazzSource', { data: { type: 'HOMEWORK' } }, (data)=> {
      this.taskList = data;
    });

    this.baseService.postData('/admin/clazzSource/getStudentClazzSource', { data: { type: 'COURSE' } }, (data) => {
      this.courseList = data
    });
  }
}
