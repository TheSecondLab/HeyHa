import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModifiedPasswordPage } from './modified-password';

@NgModule({
  declarations: [
    ModifiedPasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(ModifiedPasswordPage),
  ],
})
export class ModifiedPasswordPageModule {}
