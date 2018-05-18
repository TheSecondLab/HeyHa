import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyClassPage } from './my-class';

@NgModule({
  declarations: [
    MyClassPage,
  ],
  imports: [
    IonicPageModule.forChild(MyClassPage),
  ],
})
export class MyClassPageModule {}
