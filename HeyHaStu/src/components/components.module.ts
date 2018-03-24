import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';

import { NewsListThumbComponent } from './news-list-thumb/news-list-thumb';
import { MenuBarComponent } from './menu-bar/menu-bar';
import { ReminderComponent } from './reminder/reminder';
import { SubTitleComponent } from './sub-title/sub-title';
import { PersonalInfoComponent } from './personal-info/personal-info';
import { MyInfoListComponent } from './my-info-list/my-info-list';
@NgModule({
  declarations: [NewsListThumbComponent,
    MenuBarComponent,
    ReminderComponent,
    SubTitleComponent,
    PersonalInfoComponent,
    MyInfoListComponent],
	imports: [BrowserModule, IonicModule],
  exports: [NewsListThumbComponent,
    MenuBarComponent,
    ReminderComponent,
    SubTitleComponent,
    PersonalInfoComponent,
    MyInfoListComponent]
})
export class ComponentsModule {}
