import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainPage } from './train';
import { TaskItemComponent } from './task-item/task-item';

@NgModule({
  declarations: [
    TrainPage,
    TaskItemComponent
  ],
  imports: [
    IonicPageModule.forChild(TrainPage),
  ],
})
export class TrainPageModule {}
