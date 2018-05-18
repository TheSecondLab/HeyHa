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

  studentName;
  photoUrl;
  taekwondoName;
  expirationTimeEndStr;
  tel;
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
    if(tel) {
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
          }
        ]
      });
   
      actionSheet.present();
      return;
    }
    let alert = this.alertCtrl.create({
      message: '无电话号码',
      buttons: ['好的']
    });
    alert.present();
  }

  ionViewWillEnter() {
    this.loadPageData();
   
  }

  loadPageData() {
    this.baseService.multiReq({
      requests: [{
        url: '/admin/member/getMemberByMemberId',
        option: { data: { id: this.navParams.get('item').id } }
      },{
        url: '/admin/follow/getMemberFollow',
        option: { data: { memberId: this.navParams.get('item').id } }
      }],
      onSuccess: (datas) => {
        this.studentName = this.navParams.get('item').name;
        this.photoUrl = datas[0].photoUrl;
        this.taekwondoName = datas[0].taekwondoName;
        this.expirationTimeEndStr = datas[0].expirationTimeEndStr;
        this.tel = datas[0].tel;

        this.studentTrace = datas[1];
      }
    });
  }

  navTo() {
    this.navCtrl.push('PostTraceRecordPage', {
      name: this.studentName,
      id: this.navParams.get('item').id
    })
  }
  

}
