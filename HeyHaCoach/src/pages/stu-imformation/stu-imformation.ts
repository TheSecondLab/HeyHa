import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

import { BaseService } from '../../module/baseService.service';

/**
 * Generated class for the StuImformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stu-imformation',
  templateUrl: 'stu-imformation.html',
})
export class StuImformationPage {

  // studentId;
  studentMsg;
  constructor(
    public navCtrl: NavController, 
    public baseService: BaseService, 
    public navParams: NavParams) {
    // this.studentId = this.navParams.get('item').id
  }

  ngOnInit() {
    this.loadPageData();
  }

  loadPageData() {

    this.baseService.postData('/admin/member/getMemberByMemberId', { data: { id: this.navParams.get('item').id } }, (data)=> {
      this.studentMsg = data;
    });
  


  }

  // @ViewChild(Header) header: Header;
  // ionViewDidLoad() {
  //   // console.log(window.t = this);
  //   // this.content.addScrollListener(this.onPageScroll);
  // }

  // onPageScroll(event) {
  //   console.log('1222')
  // }

  
}
