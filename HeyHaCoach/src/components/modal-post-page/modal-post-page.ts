import { Component } from '@angular/core';
import { NavParams, ViewController, AlertController } from 'ionic-angular';
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
    public viewCtrl: ViewController
  ) {
    this.form = new FormGroup({
      record: new FormControl('', Validators.required)
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
    if (this.params.get('classId')) {
      this.multiUpload.uploadFile(
        "/admin/dynamic/addDynamic",
        "file_img",
        [{clazzId: this.params.get('classId')}, {content: this.form.value.record }],
        this.photoList,
        ()=> {this.viewCtrl.dismiss();}, () => {}
      );
      return;
    }

    this.multiUpload.uploadFile(
      "/admin/user/updatePhotoKeyAndintroduction",
      "file_photoKey", [{introduction: this.form.value }],
      this.photoList,
      ()=> { this.viewCtrl.dismiss(); },
      () => {}
    )


  }

}
