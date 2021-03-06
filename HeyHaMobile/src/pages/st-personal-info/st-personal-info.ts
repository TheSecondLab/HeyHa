import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController, ViewController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject }from'@ionic-native/file-transfer';

import { BaseService } from '../../module/baseService.service';
import { UpLoadService } from '../../module/uploadService.service';

@IonicPage()
@Component({
  selector: 'page-st-personal-info',
  templateUrl: 'st-personal-info.html',
})
export class StPersonalInfoPage {

  // infos = [{
  //   label: 'testtest',
  //   value: '123123123123'
  // },{
  //   label: 'testtest',
  //   value: '123123123123'
  // },{
  //   label: 'testtest',
  //   value: '123123123123'
  // },{
  //   label: 'testtest',
  //   value: '123123123123'
  // }]
  item: any = {
    photoUrl: '',
    taekwondoId: '',
    expirationTimeEndStr: '',
    sexStr: '',
    birthdayStr: '',
    code: '',
    tel: '',
    idCard: '',
    address: '',
    school: ''
  };

  imgSrc="";

  constructor(
    public uploadService: UpLoadService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public baseService: BaseService,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController) {
    // this.fileTransfer = this.transfer.create();
  }

  ionViewWillEnter() {
    this.viewCtrl.setBackButtonText('返回');

    this.loadData();
  }

  loadData() {
    this.baseService.postData('/admin/student', { data: {} }, (data)=> {
      this.item = data;
    });
  }

  showActionSheet() {
    this.uploadService.chooseAndUpload('/admin/user/updatePhotoKey', {
      fileKey: 'file_photoKey',
      onSuccess: () => {
        this.loadData();
      }
    });
  }


}
