import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BaseService } from '../../module/baseService.service';

/**
 * Generated class for the ExerciseTasksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exercise-tasks',
  templateUrl: 'exercise-tasks.html',
})
export class ExerciseTasksPage {

  classList;

  constructor(
    public navCtrl: NavController,
    public baseService: BaseService,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExerciseTasksPage');
  }


  // ngOnInit() {
  //   this.loadPageData();
  // }
  
  // loadPageData() {

  //   // 所管理班级中到期人数总和
  //   this.baseService.postData('/admin/clazz/getAllClass', { data: {} }, (data)=> {
  //     this.classList = data;
  //   });
  // }

  // navTo(item) {
  //   this.navCtrl.push('ClassStudentListPage', {
  //     item
  //   });
  // }
}
