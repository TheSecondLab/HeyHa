import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StClassDynamicListPage } from './st-class-dynamic-list';

@NgModule({
  declarations: [
    StClassDynamicListPage,
  ],
  imports: [
    IonicPageModule.forChild(StClassDynamicListPage),
  ],
})
export class StClassDynamicListPageModule {}
