import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the CourseListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'course-list',
  templateUrl: 'course-list.html'
})
export class CourseListComponent {

  @Input() list;
  courseList = [];

  constructor(
    public navCtrl: NavController) {
  }

  ngOnChanges(changes) {
    this.courseList = changes.list.currentValue;

  }

  goCourseDetail(item) {
    this.navCtrl.push('CourseDetailPage', {
      item
    });
  }

}
