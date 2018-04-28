import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BaseService } from '../../module/baseService.service';

/**
 * Generated class for the TaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {

  public pageName = 'TaskListPage';
  classList;
  constructor(
    public baseService: BaseService,
    public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskPage');
  }

  ngOnInit() {
    this.loadPageData();
  }
  
  loadPageData() {

    // 所管理班级中到期人数总和
    this.baseService.postData('/admin/clazz/getAllClass', { data: {} }, (data)=> {
      this.classList = data;
    });
  }

  navTo(item) {
    this.navCtrl.push('TaskListPage', {
      item
    });
  }
}
