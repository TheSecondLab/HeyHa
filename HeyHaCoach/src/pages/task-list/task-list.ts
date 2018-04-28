import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { BaseService } from '../../module/baseService.service';

/**
 * Generated class for the TaskListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task-list',
  templateUrl: 'task-list.html',
})
export class TaskListPage {

  dataList;
  classTitle;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public baseService: BaseService,
    public menu: MenuController) {
    menu.enable(true);
  }

  showMenu() {
    this.menu.toggle()
  }

  openPage(str) {
    console.log(str);
    this.menu.close();
  }

  swipeEvent(e) {
    console.log(e);
  }

  ngOnInit() {
    this.classTitle = this.navParams.get('item').name;
    this.loadPageData();
  }
  
  loadPageData() {
    
    this.baseService.postData('/admin/clazzSource/getEmployeeClazzSource',
      { data: {
        clazzId: this.navParams.get('item').id,
        type: 'HOMEWORK'
      }}, 
      (data)=> {
        this.dataList = data;
    });
  }

}
