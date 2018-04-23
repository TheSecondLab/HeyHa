import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BaseService } from '../../module/baseService.service';

@IonicPage()
@Component({
  selector: 'page-personal-info',
  templateUrl: 'personal-info.html',
})
export class PersonalInfoPage {

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public baseService: BaseService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.baseService.postData('/admin/student', { data: {} }, (data)=> {
      this.item = data;
    });
  }


}
