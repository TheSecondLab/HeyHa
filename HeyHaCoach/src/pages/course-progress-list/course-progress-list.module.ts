import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CourseProgressListPage } from './course-progress-list';

@NgModule({
  declarations: [
    CourseProgressListPage,
  ],
  imports: [
    IonicPageModule.forChild(CourseProgressListPage),
  ],
})
export class CourseProgressListPageModule {}
