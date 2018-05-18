import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassDynamicListPage } from './class-dynamic-list';

@NgModule({
  declarations: [
    ClassDynamicListPage,
  ],
  imports: [
    IonicPageModule.forChild(ClassDynamicListPage),
  ],
})
export class ClassDynamicListPageModule {}
