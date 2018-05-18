import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BaseService } from '../../module/baseService.service';

/**
 * Generated class for the CouseVideoListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-couse-video-list',
  templateUrl: 'couse-video-list.html',
})
export class CouseVideoListPage {
  dataList;
  constructor(
    public navCtrl: NavController, 
    public baseService: BaseService,
    public navParams: NavParams) {
  }


  ngOnInit() {
    // this.classTitle = this.navParams.get('item').name;
    this.loadPageData(this.navParams.get('item').id);
  }

  loadPageData(id) {
    this.baseService.postData('/admin/clazzSource/getEmployeeClazzSourceDetail',
    { data: { id } }, 
      (data)=> {
        this.dataList = data;
    });
  }

  navTo(item) {
    this.navCtrl.push('CourseDetailPage', {
      item
    })
  }

}
