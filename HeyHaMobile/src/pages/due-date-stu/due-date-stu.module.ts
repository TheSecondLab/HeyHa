import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DueDateStuPage } from './due-date-stu';

@NgModule({
  declarations: [
    DueDateStuPage,
  ],
  imports: [
    IonicPageModule.forChild(DueDateStuPage),
  ],
})
export class DueDateStuPageModule {}
