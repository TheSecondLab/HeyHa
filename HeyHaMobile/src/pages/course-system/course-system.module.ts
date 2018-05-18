import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CourseSystemPage } from './course-system';
import { CourseListComponent } from '../../components/course-list/course-list';
import { DropdownComponent } from '../../components/dropdown/dropdown';
@NgModule({
  declarations: [
    CourseSystemPage,
    CourseListComponent,
    DropdownComponent
  ],
  imports: [
    IonicPageModule.forChild(CourseSystemPage),
  ],
})
export class CourseSystemPageModule {}
