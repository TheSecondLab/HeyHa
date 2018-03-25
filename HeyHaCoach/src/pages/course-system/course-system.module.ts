import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CourseSystemPage } from './course-system';
import { CourseListComponent } from '../../components/course-list/course-list';
@NgModule({
  declarations: [
    CourseSystemPage,
    CourseListComponent
  ],
  imports: [
    IonicPageModule.forChild(CourseSystemPage),
  ],
})
export class CourseSystemPageModule {}
