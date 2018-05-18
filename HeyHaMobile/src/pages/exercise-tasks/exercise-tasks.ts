import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BaseService } from '../../module/baseService.service';

/**
 * Generated class for the ExerciseTasksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exercise-tasks',
  templateUrl: 'exercise-tasks.html',
})
export class ExerciseTasksPage {

  classList;

  constructor(
    public navCtrl: NavController,
    public baseService: BaseService,
    public navParams: NavParams) {
  }


}
