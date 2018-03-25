import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CourseDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-course-detail',
  templateUrl: 'course-detail.html',
})
export class CourseDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  showContent(e) {
    const div = e.currentTarget;
    if (div.className.indexOf('hidden') > 0) {
      div.className = div.className.replace('hidden', '')
    } else {
      div.className = `${div.className} hidden`;
    }
  }

}
