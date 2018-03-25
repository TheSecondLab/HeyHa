import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/**
 * Generated class for the ExerciseListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'exercise-list',
  templateUrl: 'exercise-list.html'
})
export class ExerciseListComponent {

  public list = [{
    time: '2014年1月3日',
    completed: '4',
    count: 26
  }, {
    time: '2014年1月3日',
    completed: '4',
    count: 26
  }, {
    time: '2014年1月3日',
    completed: '4',
    count: 26
  }];

  constructor(public navCtrl: NavController) {

  }

  navTo(page) {
    this.navCtrl.push(page);
  }

}
