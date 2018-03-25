import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskListPage } from './task-list';
import { ExerciseListComponent } from '../../components/exercise-list/exercise-list';
@NgModule({
  declarations: [
    TaskListPage,
    ExerciseListComponent
  ],
  imports: [
    IonicPageModule.forChild(TaskListPage),
  ],
})
export class TaskListPageModule {}
