import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import { BaseService } from '../../module/baseService.service';
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
  constructor(
    public params: NavParams,public baseService: BaseService,
    public viewCtrl: ViewController
  ) {
    this.form = new FormGroup({
      record: new FormControl('', Validators.required)
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  submit() {
    this.baseService.postData("/admin/growthRecord/create", { data: this.form.value }, (data) => {
      this.viewCtrl.dismiss();
    });
  }

}
