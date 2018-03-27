import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/**
 * Generated class for the StuListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'stu-list',
  templateUrl: 'stu-list.html'
})
export class StuListComponent {


  public list = [{
    imgUrl: 'assets/imgs/iphoto.JPG',
    name: '金田',
    number: 'CFTA110500'
  }, {
    imgUrl: 'assets/imgs/iphoto.JPG',
    name: '金田',
    number: 'CFTA110500'
  }, {
    imgUrl: 'assets/imgs/iphoto.JPG',
    name: '金田',
    number: 'CFTA110500'
  }];

  constructor(public navCtrl: NavController) {

  }

  goRemindDetail(number) {
    console.log(number);
    // this.navCtrl.push();
  }
}
