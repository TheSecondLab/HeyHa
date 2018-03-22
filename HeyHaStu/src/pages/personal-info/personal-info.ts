import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PersonalInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal-info',
  templateUrl: 'personal-info.html',
})
export class PersonalInfoPage {

  infos = [{
    label: 'testtest',
    value: '123123123123'
  },{
    label: 'testtest',
    value: '123123123123'
  },{
    label: 'testtest',
    value: '123123123123'
  },{
    label: 'testtest',
    value: '123123123123'
  }]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalInfoPage');
  }

}
