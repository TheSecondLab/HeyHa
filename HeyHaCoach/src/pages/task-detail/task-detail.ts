import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BaseService } from '../../module/baseService.service';

/**
 * Generated class for the TaskDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task-detail',
  templateUrl: 'task-detail.html',
})
export class TaskDetailPage {
  
  public tabIndex = 1;
  type: string = 'remind';
  public pageName = '';
  taskList;
  id;
  completeStu;
  uncompleteStu;

  constructor(
    public navCtrl: NavController,
    public baseService: BaseService,
    public navParams: NavParams) {
    this.pageName = 'ClassDynamicListPage';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskDetailPage');
  }

  ngOnInit() {

  }

  loadPageData() {
    this.id = this.navParams.get('item').id;
    this.baseService.postData('/admin/clazz/getEmployeeClazzSourceDetail', { data: { id: this.id } }, (data)=> {
      this.taskList = data;
    });
    
    this.baseService.postData('/admin/clazz/getEmployeeClazzSourceLearning', { data: { id: this.id } }, (data)=> {
      this.taskList = data;
      this.completeStu = data.map((obj) => {
        if (obj.completeStatus === 'COMPLETE') {
          return obj;
        } else {
          this.uncompleteStu.push(obj);
        }
      });
    });
  }

  remindStu(item) {
    if (item.notice === 'INACTIVE') {
      this.baseService.postData('/admin/clazz/getEmployeeClazzSourceDetail', { data: { id: this.id, memberId: item.id } }, (data)=> {
        
      });
      
    }
    return;
  }
  // /admin/clazz/getEmployeeClazzSourceDetail
  changeTab(idx) {
    this.tabIndex = idx;
  }

}
