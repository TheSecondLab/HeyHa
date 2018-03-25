import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the TaskItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'task-item',
  templateUrl: 'task-item.html'
})
export class TaskItemComponent {

  @Input() task

  constructor(public navCtrl: NavController) {
  }

  navTo() {
    this.navCtrl.push('CourseDetailPage');
  }
}
