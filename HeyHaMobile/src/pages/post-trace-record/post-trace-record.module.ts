import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostTraceRecordPage } from './post-trace-record';

@NgModule({
  declarations: [
    PostTraceRecordPage,
  ],
  imports: [
    IonicPageModule.forChild(PostTraceRecordPage),
  ],
})
export class PostTraceRecordPageModule {}
