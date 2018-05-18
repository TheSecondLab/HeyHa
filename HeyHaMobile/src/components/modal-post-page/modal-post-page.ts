import { Component } from '@angular/core';
import { NavParams, ViewController, AlertController, LoadingController } from 'ionic-angular';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import { BaseService } from '../../module/baseService.service';
import { MultipleUpLoadService } from '../../module/multipleUpdate.service';
import { UpLoadService } from '../../module/uploadService.service';

/**
 * Generated class for the ModalPostPageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
// @IonicPage()
@Component({
  selector: 'modal-post-page',
  templateUrl: 'modal-post-page.html'
})
export class ModalPostPageComponent {

  form;
  photoList = [];
  imgLength;
  constructor(
    public params: NavParams,
    public uploadService: UpLoadService,
    public baseService: BaseService,
    public alertCtrl: AlertController,
    public multiUpload: MultipleUpLoadService,
    public viewCtrl: ViewController,
    public loadingCtrl: LoadingController
  ) {
    this.form = new FormGroup({
      record: new FormControl(this.params.get('userInfo') ? this.params.get('userInfo').introduction : '', Validators.required)
    });
  }

  ngOnInit() {
    this.imgLength = this.params.get('classId') ? 3 : 1 ;
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
      content: '请稍后...'
    });
    loading.present();

    if (this.params.get('classId')) {
      const params = new Map();
      params.set('clazzId', this.params.get('classId'));
      params.set('content', this.form.value.record);

      this.multiUpload.uploadFile(
        "/admin/dynamic/addDynamic",
        "file_image",
        params,
        this.photoList,
        ()=> {
          loading.dismiss();
          this.viewCtrl.dismiss({ uploadRes: true });
        }, () => {
          loading.dismiss();
        }
      );
      return;
    }

    const params = new Map();
    params.set('introduction', this.form.value.record);

    this.multiUpload.uploadFile(
      "/admin/user/updatePhotoKeyAndintroduction",
      "file_photoKey",
      // [{introduction: this.form.value }],
      params,
      this.photoList,
      ()=> {
        loading.dismiss();
        this.viewCtrl.dismiss();
      },
      () => {
        loading.dismiss();
      }
    )


  }

}
