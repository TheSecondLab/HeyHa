import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassDueStudentPage } from './class-due-student';
// import { RemindListAllComponent } from '../../components/remind-list-all/remind-list-all'
@NgModule({
  declarations: [
    ClassDueStudentPage,
    // RemindListAllComponent
    // RemindListAllComponent
  ],
  imports: [
    IonicPageModule.forChild(ClassDueStudentPage),
  ],
})
export class ClassDueStudentPageModule {}
