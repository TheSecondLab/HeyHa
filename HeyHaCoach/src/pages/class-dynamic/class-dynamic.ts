import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BaseService } from '../../module/baseService.service';

/**
 * Generated class for the ClassDynamicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-class-dynamic',
  templateUrl: 'class-dynamic.html',
})
export class ClassDynamicPage {

  public pageName = 'ClassDynamicListPage';
  classList;
  constructor(
    public navCtrl: NavController,
    public baseService: BaseService,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassDynamicPage');
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
    this.navCtrl.push('ClassDynamicListPage', {
      item
    });
  }

}
