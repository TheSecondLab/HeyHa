import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import { BaseService } from '../../module/baseService.service';

/**
 * Generated class for the PostTraceRecordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-trace-record',
  templateUrl: 'post-trace-record.html',
})
export class PostTraceRecordPage {
  form;
  stuName;
  way;
  content;
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public baseService: BaseService,
    public navParams: NavParams) {
      
  }

  ionViewWillEnter() {
    this.stuName = this.navParams.get('name');
  }

  addTrace() {

    const reqObj = {
      memberId: this.navParams.get('id'),
      way: this.way,
      content: this.content
    };

    this.baseService.postData('/admin/follow/create', { data: { ...reqObj } }, (data)=> {
      this.navCtrl.pop();
    });
    
  }



}
