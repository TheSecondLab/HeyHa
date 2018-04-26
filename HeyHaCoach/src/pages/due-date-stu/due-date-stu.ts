import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

import { BaseService } from '../../module/baseService.service';

/**
 * Generated class for the DueDateStuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-due-date-stu',
  templateUrl: 'due-date-stu.html',
})
export class DueDateStuPage {

  studentMsg;
  studentTrace;

  constructor(
    private callNumber: CallNumber,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public baseService: BaseService) {
  }

  presentActionSheet(tel) {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: tel,
          handler: () => {
            console.log('拨打电话');
            this.callNumber.callNumber(tel, true)
              .then(res => console.log('拨打成功!', res))
              .catch(err => console.log('Error launching dialer', err));
          }
        },
        // {
        //   text: '132-2672-1211',
        //   handler: () => {
        //     console.log('Archive clicked');
        //   }
        // },
        // {
        //   text: 'Cancel',
        //   role: 'cancel',
        //   handler: () => {
        //     console.log('Cancel clicked');
        //   }
        // }
      ]
    });
 
    actionSheet.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DueDateStuPage');
  }

  ngOnInit() {
    this.loadStudentMsg();
    this.loadStudentTrace();
   
  }

  loadStudentMsg() {
    this.baseService.postData('/admin/member/getMemberByMemberId', { data: { id: this.navParams.get('item').id } }, (data)=> {
      let alert = this.alertCtrl.create({
        title: 'id',
        message: JSON.stringify(this.navParams.get('item'))
      });
      alert.present();
      this.studentMsg = data;
    });
  }

  loadStudentTrace() {
    this.baseService.postData('/admin/follow/getMemberFollow', { data: { id: this.navParams.get('item').id } }, (data)=> {
      let alert = this.alertCtrl.create({
        title: 'id',
        message: JSON.stringify(this.navParams.get('item'))
      });
      alert.present();
      this.studentTrace = data;
    });
    
  }

  navTo(page) {
    this.navCtrl.push(page)
  }
  

}
