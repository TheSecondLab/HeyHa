import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoachInfoPage } from './coach-info';

@NgModule({
  declarations: [
    CoachInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(CoachInfoPage),
  ],
})
export class CoachInfoPageModule {}
