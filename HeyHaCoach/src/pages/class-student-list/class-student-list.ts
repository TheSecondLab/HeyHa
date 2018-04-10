import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ClassStudentListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-class-student-list',
  templateUrl: 'class-student-list.html',
})
export class ClassStudentListPage {

  public list = [{
    imgUrl: 'assets/imgs/iphoto.JPG',
    name: '金田',
    no: 'CFTA110500',
    date: '2012年10月12号',
    attendence: 4
  }, {
    imgUrl: 'assets/imgs/iphoto.JPG',
    name: '金田',
    no: 'CFTA110500',
    date: '2012年10月12号',
    attendence: 4
  }, {
    imgUrl: 'assets/imgs/iphoto.JPG',
    name: '金田',
    no: 'CFTA110500',
    date: '2012年10月12号',
    attendence: 4
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassStudentListPage');
  }

  navTo(page) {
    this.navCtrl.push(page);
  }

}
