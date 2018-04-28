import { Component, Input } from '@angular/core';
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

  @Input() list;
  exerciseList;
  constructor(public navCtrl: NavController) {

  }

  ngOnChanges(changes) {
    this.exerciseList = changes.list.currentValue;

  }
  navTo(item) {
    this.navCtrl.push('TaskDetailPage', { item });
  }

}
