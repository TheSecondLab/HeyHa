import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { BaseService } from '../../module/baseService.service';

/**
 * Generated class for the CourseProgressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-course-progress',
  templateUrl: 'course-progress.html',
})
export class CourseProgressPage {

  
  public pageName = 'TaskListPage';
  classList;
  constructor(
    public baseService: BaseService,
    public viewCtrl: ViewController,
    public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewWillEnter() {
    this.viewCtrl.setBackButtonText('返回');
    this.loadPageData();
  }
  
  loadPageData() {

    // 所管理班级中到期人数总和
    this.baseService.postData('/admin/clazz/getAllClass', { data: {} }, (data)=> {
      this.classList = data;
    });
  }

  navTo(item) {
    this.navCtrl.push('CourseProgressListPage', {
      item
    });
  }

}
