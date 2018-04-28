import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import { BaseService } from '../../module/baseService.service';
import { MultipleUpLoadService } from '../../module/multipleUpdate.service';

@Component({
  selector: 'modal-post-page',
  templateUrl: 'modal-post-page.html'
})
export class ModalPostPageComponent {
  form;
  photoList = [];
  constructor(
    public params: NavParams,
    public baseService: BaseService,
    public multiUpload: MultipleUpLoadService,
    public viewCtrl: ViewController
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
    // const params = new Map();
    // params.set('record', this.form.value)

    this.multiUpload.uploadFile("/admin/growthRecord/create", "file_img", [{record: this.form.value }], this.photoList, ()=> {this.viewCtrl.dismiss();}, () => {})


    // postData("/admin/growthRecord/create", { data: this.form.value }, (data) => {
    //   this.viewCtrl.dismiss();
    // });
  }

}
