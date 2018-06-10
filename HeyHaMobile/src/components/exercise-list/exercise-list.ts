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
    this.exerciseList = changes.list.currentValue ? changes.list.currentValue.map(item => {
      const dateStrs = item.dateStr.split('-');
      item.dateStr = dateStrs[0] + '年' + dateStrs[1] + '月' + dateStrs[2] + '日';
      return item
    }) : []

  }
  navTo(item) {
    this.navCtrl.push('TaskDetailPage', { item });
  }

}
