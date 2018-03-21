import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExerciseTasksPage } from './exercise-tasks';

@NgModule({
  declarations: [
    ExerciseTasksPage,
  ],
  imports: [
    IonicPageModule.forChild(ExerciseTasksPage),
  ],
})
export class ExerciseTasksPageModule {}
