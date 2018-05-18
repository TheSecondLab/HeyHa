import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CourseProgressPage } from './course-progress';

@NgModule({
  declarations: [
    CourseProgressPage,
  ],
  imports: [
    IonicPageModule.forChild(CourseProgressPage),
  ],
})
export class CourseProgressPageModule {}
