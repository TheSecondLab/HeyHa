import { Component } from '@angular/core'; // Angular核心组件
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { BaseService } from '../../module/baseService.service';


@IonicPage()
@Component({
  selector: 'page-mine', // 使用组件的名称
  templateUrl: 'mine.html' // HTML
  // styleUrls: ['mine.scss'] // 样式
})
export class MinePage {
  i: number = 0;
  personInfo = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public baseService: BaseService, public alertCtrl: AlertController) {
    this.i++;
  }

  navTo(page) {
    this.navCtrl.push(page);
  }

  ionViewWillEnter() {
    this.loadData();
  }

  loadData() {
    // const alert = this.alertCtrl.create({
    //   title:'init',
    //   message: JSON.stringify('init')
    // })
    // alert.present();
    this.baseService.postData('/admin/student', { data: {} }, (data)=> {
      this.personInfo = data;
      // const alert = this.alertCtrl.create({
      //   title:'init',
      //   message: JSON.stringify(data)
      // })
      // alert.present();
    },
    (error)=> {
      const alert = this.alertCtrl.create({
        title:'error',
        message: JSON.stringify(error)
      })
      alert.present();
    });
  }
}
