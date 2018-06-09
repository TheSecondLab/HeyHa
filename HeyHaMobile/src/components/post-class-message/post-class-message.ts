import { Component } from '@angular/core';
import { NavParams, ViewController, AlertController, LoadingController } from 'ionic-angular';
import { IMService } from '../../module/imService.service';

import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import { BaseService } from '../../module/baseService.service';
import { MultipleUpLoadService } from '../../module/multipleUpdate.service';
import { UpLoadService } from '../../module/uploadService.service';

/**
 * Generated class for the PostClassMessageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'post-class-message',
  templateUrl: 'post-class-message.html'
})
export class PostClassMessageComponent {


  form;
  photoList = [];
  imgLength;
  allClassStudent;
  constructor(
    public params: NavParams,
    public imService: IMService,
    public uploadService: UpLoadService,
    public baseService: BaseService,
    public alertCtrl: AlertController,
    public multiUpload: MultipleUpLoadService,
    public viewCtrl: ViewController,
    public loadingCtrl: LoadingController
  ) {
    this.form = new FormGroup({
      record: new FormControl('', Validators.required)
    });
  }

  // ngOnInit() {

  //   let alert = this.alertCtrl.create({
  //     message: JSON.stringify(this.params.get('classIds'))
  //   });
  //   alert.present();
  // }

  loadClassStudent(classIds) {

    const classCount = classIds.length;
    const param = classIds.map((item) => {
      return {
        url: '/admin/clazz',
        option: { data: { clazzId: item } }
      };
    });
    this.baseService.multiReq({
      requests: param,
      onSuccess: (datas) => {
        const allClassStudent = [];
        datas.forEach((item) => {
          allClassStudent.push(...item);
        });
        this.allClassStudent = allClassStudent;

      }
    });
    
  }

  ionViewWillEnter() {
    this.loadClassStudent(this.params.get('classIds'));
  }

  addPhoto() {
    this.multiUpload.chooseImage((data) => {
      this.photoList.push(data);
    });

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  submit() {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: '请稍后...',
      showBackdrop: false
    });
    loading.present();
    const message = this.form.value.record;
    this.allClassStudent.forEach((item) => {
      this.sendMsg(item.code, message);
      this.sendImage(item.code, this.photoList[0])

    });
     let alert = this.alertCtrl.create({
       title: '提示',
       message: '发送成功'
     });
     alert.present()
    loading.dismiss();
    this.viewCtrl.dismiss();

  }


  sendMsg(username, message) {
    this.imService.sendTextMsg(username, message);
  }

  sendImage(username, path) {
    this.imService.sendImageMsg(username, path);
  }

  delImage(imgUrl) {
    this.photoList = this.photoList.filter((item) => item !== imgUrl);
  }

}
