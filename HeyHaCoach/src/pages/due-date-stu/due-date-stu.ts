import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public baseService: BaseService) {
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: '132-2222-1111',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: '132-2672-1211',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
 
    actionSheet.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DueDateStuPage');
  }

  navTo(page) {
    this.navCtrl.push(page)
  }

}
