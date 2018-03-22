import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyPointPage } from './my-point';

@NgModule({
  declarations: [
    MyPointPage,
  ],
  imports: [
    IonicPageModule.forChild(MyPointPage),
  ],
})
export class MyPointPageModule {}
