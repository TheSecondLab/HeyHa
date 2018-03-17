import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  @ViewChild(Content) content: Content;
  // @ViewChild(Header) header: Header;
  ionViewDidLoad() {
    // console.log(window.t = this);
    // this.content.addScrollListener(this.onPageScroll);
  }

  onPageScroll(event) {
    console.log('1222')
  }

}
