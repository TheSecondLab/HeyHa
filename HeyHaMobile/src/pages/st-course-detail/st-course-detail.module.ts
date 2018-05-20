import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StCourseDetailPage } from './st-course-detail';

@NgModule({
  declarations: [
    StCourseDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(StCourseDetailPage),
  ],
})
export class StCourseDetailPageModule {}
