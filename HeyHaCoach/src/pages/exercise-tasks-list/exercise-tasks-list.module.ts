import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExerciseTasksListPage } from './exercise-tasks-list';

@NgModule({
  declarations: [
    ExerciseTasksListPage,
  ],
  imports: [
    IonicPageModule.forChild(ExerciseTasksListPage),
  ],
})
export class ExerciseTasksListPageModule {}
