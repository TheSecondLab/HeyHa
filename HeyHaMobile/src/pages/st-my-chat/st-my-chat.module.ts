import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StMyChatPage } from './st-my-chat';

@NgModule({
  declarations: [
    StMyChatPage,
  ],
  imports: [
    IonicPageModule.forChild(StMyChatPage),
  ],
})
export class StMyChatPageModule {}
