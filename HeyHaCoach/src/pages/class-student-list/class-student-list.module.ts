import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassStudentListPage } from './class-student-list';

@NgModule({
  declarations: [
    ClassStudentListPage,
  ],
  imports: [
    IonicPageModule.forChild(ClassStudentListPage),
  ],
})
export class ClassStudentListPageModule {}
