
import { NavController, AlertController } from 'ionic-angular';
import { Component, Input } from '@angular/core';
import { BaseService } from '../../module/baseService.service';
/**
 * Generated class for the PersonalInfoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'personal-info',
  templateUrl: 'personal-info.html'
})
export class PersonalInfoComponent {
  @Input() item: any = {
    photoUrl: '',
    taekwondoId: '',
    expirationTimeEndStr: '',
    sexStr: '',
    birthdayStr: '',
    code: '',
    tel: '',
    idCard: '',
    address: '',
    school: '',
    name: ''
  };
  constructor(public navCtrl: NavController, public baseService: BaseService, public alertCtrl: AlertController) {
  }

  navTo(page) {
    this.navCtrl.push(page)
  }

  // ngOnInit() {
  //   this.loadData();
  // }

  // loadData() {
  //   // const alert = this.alertCtrl.create({
  //   //   title:'init',
  //   //   message: JSON.stringify('init')
  //   // })
  //   // alert.present();
  //   this.baseService.postData('/admin/student', { data: {} }, (data)=> {
  //     this.item = data;
  //     // const alert = this.alertCtrl.create({
  //     //   title:'init',
  //     //   message: JSON.stringify(data)
  //     // })
  //     // alert.present();
  //   },
  //   (error)=> {
  //     const alert = this.alertCtrl.create({
  //       title:'error',
  //       message: JSON.stringify(error)
  //     })
  //     alert.present();
  //   });
  // }

}
