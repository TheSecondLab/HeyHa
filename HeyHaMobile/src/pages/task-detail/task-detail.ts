import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';

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
  type: string = 'unfinish';
  public pageName = '';
  taskList;
  id;
  completeStu;
  uncompleteStu;
  title;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public baseService: BaseService,
    public viewCtrl: ViewController,
    public navParams: NavParams) {
    this.pageName = 'ClassDynamicListPage';
  }

  ionViewWillEnter() {
    this.viewCtrl.setBackButtonText('返回');

    this.loadPageData();
  }

  loadPageData() {
    this.title = this.navParams.get('item').dateStr;
    this.id = this.navParams.get('item').id;
    this.baseService.multiReq({
      requests: [{
        url: '/admin/clazzSource/getEmployeeClazzSourceDetail',
        option: { data: {id: this.id} }
      },{
        url: '/admin/clazzSource/getEmployeeClazzSourceLearning',
        option: { data: {id: this.id} }
      }],
      onSuccess: (datas) => {
        this.taskList = datas[0];
        this.handleStudentList(datas[1]);

      }
    });
  
  }

  handleStudentList(data) {
    let completeStu = [], uncompleteStu = [];
    data.forEach((obj) => {
      if (obj.completeStatus === 'COMPLETE') {
        completeStu.push(obj);
      } else {
        uncompleteStu.push(obj);
      }
    });
    this.completeStu = completeStu;
    this.uncompleteStu = uncompleteStu
  }

  remindStu(item) {
    if (item.notice === 'INACTIVE') {
      this.baseService.postData('/admin/clazzSource/noticeClazzSource', { data: { id: this.id, memberId: item.id }, hideLoading: true }, (data)=> {
        this.baseService.postData('/admin/clazzSource/getEmployeeClazzSourceLearning', { data: { id: this.id } }, (data)=> {
          this.handleStudentList(data);
        })
      });
      
    }
    return;
  }


  navTo(item) {
    this.navCtrl.push('CourseDetailPage', {
      item
    })
  }

}
