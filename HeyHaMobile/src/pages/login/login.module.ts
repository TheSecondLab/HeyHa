import { NgModule } from '@angular/core';
import { IonicPageModule, AlertController } from 'ionic-angular';
import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {
  constructor(public alertCtrl: AlertController) {

  }

}
