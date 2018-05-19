import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StPersonalInfoPage } from './st-personal-info';

@NgModule({
  declarations: [
    StPersonalInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(StPersonalInfoPage),
  ],
})
export class StPersonalInfoPageModule {}
