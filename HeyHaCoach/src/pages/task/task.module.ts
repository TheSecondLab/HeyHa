import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskPage } from './task';
import { ClassListComponent } from '../../components/class-list/class-list'
@NgModule({
  declarations: [
    TaskPage
  ],
  imports: [
    IonicPageModule.forChild(TaskPage),
  ],
})
export class TaskPageModule {}
