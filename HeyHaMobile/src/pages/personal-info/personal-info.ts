import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController, ViewController } from 'ionic-angular';
import { BaseService } from '../../module/baseService.service';
import { ModalPostPageComponent } from '../../components/modal-post-page/modal-post-page';

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

  userInfo = {};
  infos = [];
  constructor(
    public navCtrl: NavController,
    public baseService: BaseService,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public viewCtrl: ViewController,
    public navParams: NavParams) {
  }

  ngOnInit() {
    this.loadPageInfo();
    this.viewCtrl.setBackButtonText('返回');

  }

  openModal() {
    let modal = this.modalCtrl.create(ModalPostPageComponent, { userInfo: this.userInfo });
    modal.present();
  }

  loadPageInfo() {
    this.baseService.postData('/admin/coached', { data: {} }, (data)=> {
      this.userInfo = data;
      this.infos = [{
        label: '性别',
        value: data.sexStr
      },{
        label: '入职时间',
        value: data.inTimeStr
      },{
        label: '联系电话',
        value: data.tel
      },{
        label: '身份证号',
        value: data.userId
      },{
        label: '详细住址',
        value: data.address
      },{
        label: '职级',
        value: data.jobLevel
      },{
        label: '段位',
        value: data.levelName
      },{
        label: '个人简历',
        value: data.introduction
      }];
    });
    
  }



}
