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

  ngOnInit() {
    this.loadStudentMsg();
    this.loadStudentTrace();
   
  }

  loadStudentMsg() {
    this.baseService.postData('/admin/member/getMemberByMemberId', { data: { id: this.navParams.get('item').id } }, (data)=> {

      this.studentName = this.navParams.get('item').name;
      this.photoUrl = data.photoUrl;
      this.taekwondoName = data.taekwondoName;
      this.expirationTimeEndStr = data.expirationTimeEndStr;
      this.tel = data.tel;

    });
  }

  loadStudentTrace() {
    this.baseService.postData('/admin/follow/getMemberFollow', { data: { memberId: this.navParams.get('item').id } }, (data)=> {
      this.studentTrace = data;
    });
    
  }

  navTo(page) {
    this.navCtrl.push(page)
  }
  

}
