import { NgModule } from '@angular/core';
import { DueToRemindListComponent } from './due-to-remind-list/due-to-remind-list';
import { IonicModule } from 'ionic-angular';

import { BrowserModule } from '@angular/platform-browser';
import { SubTitleComponent } from './sub-title/sub-title';
import { NewsListComponent } from './news-list/news-list';
import { NewsDetailComponent } from './news-detail/news-detail';

@NgModule({
	declarations: [DueToRemindListComponent,
    SubTitleComponent,
    NewsListComponent,
    NewsDetailComponent],
	imports: [BrowserModule, IonicModule],
	exports: [DueToRemindListComponent,
    SubTitleComponent,
    NewsListComponent,
    NewsDetailComponent]
})
export class ComponentsModule {}
