import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  grades: Grade[] = [{
    imgUrl: 'assets/imgs/grade10.png',
    desc: '十级（白带）',
    date: '2017-11-11',
    score: 'A+'
  }, {
    imgUrl: 'assets/imgs/grade10.png',
    desc: '九级（白黄带）',
    date: '',
    score: ''
  }, {
    imgUrl: 'assets/imgs/grade10.png',
    desc: '八级（黄带）',
    date: '',
    score: ''
  }, {
    imgUrl: 'assets/imgs/grade10.png',
    desc: '七级（黄绿带）',
    date: '',
    score: ''
  }, {
    imgUrl: 'assets/imgs/grade10.png',
    desc: '六级（绿带）',
    date: '',
    score: ''
  }, {
    imgUrl: 'assets/imgs/grade10.png',
    desc: '五级（绿蓝带）',
    date: '',
    score: ''
  }, {
    imgUrl: 'assets/imgs/grade10.png',
    desc: '四级（蓝带）',
    date: '',
    score: ''
  }, {
    imgUrl: 'assets/imgs/grade10.png',
    desc: '三级（蓝红带）',
    date: '',
    score: ''
  }, {
    imgUrl: 'assets/imgs/grade10.png',
    desc: '二级（红带）',
    date: '',
    score: ''
  }, {
    imgUrl: 'assets/imgs/grade10.png',
    desc: '一级（黑带）',
    date: '',
    score: ''
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
