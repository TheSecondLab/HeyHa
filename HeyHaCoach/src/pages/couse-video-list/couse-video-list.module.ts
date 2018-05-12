import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CouseVideoListPage } from './couse-video-list';

@NgModule({
  declarations: [
    CouseVideoListPage,
  ],
  imports: [
    IonicPageModule.forChild(CouseVideoListPage),
  ],
})
export class CouseVideoListPageModule {}
