import { Component } from '@angular/core';
import { NavParams, ViewController, LoadingController, AlertController } from 'ionic-angular';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import { BaseService } from '../../module/baseService.service';
import { MultipleUpLoadService } from '../../module/multipleUpdate.service';

@Component({
  selector: 'st-modal-post-page',
  templateUrl: 'st-modal-post-page.html'
})
export class StModalPostPageComponent {
  form;
  photoList = [];
  constructor(
    public params: NavParams,
    public baseService: BaseService,
    public multiUpload: MultipleUpLoadService,
    public viewCtrl: ViewController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {
    this.form = new FormGroup({
      record: new FormControl('', Validators.required)
    });
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

    const params = new Map();
    params.set('record', this.form.value.record);

    this.multiUpload.uploadFile(
      "/admin/growthRecord/create",
      "file_img",
      params,
      this.photoList,
      () => {
        loading.dismiss()
        this.viewCtrl.dismiss();
      },
      (err) => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: "错误",
          message: JSON.stringify(err)
        });
        alert.present();
      }
    );


    // postData("/admin/growthRecord/create", { data: this.form.value }, (data) => {
    //   this.viewCtrl.dismiss();
    // });
  }

}
