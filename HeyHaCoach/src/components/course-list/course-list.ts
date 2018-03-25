import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the CourseListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'course-list',
  templateUrl: 'course-list.html'
})
export class CourseListComponent {

  public list = [{
    type: '动态',
    detail: '动作要求：前脚脚后跟与后脚脚尖距前脚脚后跟与后脚脚尖距',
    name: '11届精英2班（周六、日）',
    id: 'CFTA110500'
  }, {
    type: '动态',
    detail: '动作要求：前脚脚后跟与后脚脚尖距前脚脚后跟与后脚脚尖距',
    name: '11届精英2班（周六、日）',
    id: 'CFTA110500'
  }, {
    type: '动态',
    detail: '动作要求：前脚脚后跟与后脚脚尖距前脚脚后跟与后脚脚尖距',
    name: '11届精英2班（周六、日）',
    id: 'CFTA110500'
  }];

  constructor(public navCtrl: NavController) {

  }

  goClassDetail(id) {
    console.log(id);
    // this.navCtrl.push();
  }

}
