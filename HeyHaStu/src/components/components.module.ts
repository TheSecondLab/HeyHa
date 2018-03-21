import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';

import { NewsListThumbComponent } from './news-list-thumb/news-list-thumb';
import { MenuBarComponent } from './menu-bar/menu-bar';
import { ReminderComponent } from './reminder/reminder';
import { SubTitleComponent } from './sub-title/sub-title';
@NgModule({
  declarations: [NewsListThumbComponent,
    MenuBarComponent,
    ReminderComponent,
    SubTitleComponent],
	imports: [BrowserModule, IonicModule],
  exports: [NewsListThumbComponent,
    MenuBarComponent,
    ReminderComponent,
    SubTitleComponent]
})
export class ComponentsModule {}
