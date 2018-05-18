import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
/**
 * Generated class for the ClassListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'class-list',
  templateUrl: 'class-list.html'
})
export class ClassListComponent {

  @Input() typeName:string;
  @Input() bgColor:string;
  @Input() pageName:string;

  public list = [{
    type: '动态',
    time: '周六、日 14：30-16：00',
    name: '11届精英2班（周六、日）',
    id: 'CFTA110500'
  }, {
    type: '动态',
    time: '周六、日 14：30-16：00',
    name: '11届精英2班（周六、日）',
    id: 'CFTA110500'
  }, {
    type: '动态',
    time: '周六、日 14：30-16：00',
    name: '11届精英2班（周六、日）',
    id: 'CFTA110500'
  }];

  constructor(public navCtrl: NavController) {
    
  }

  navTo(page) {
    this.navCtrl.push(page);
  }

}
