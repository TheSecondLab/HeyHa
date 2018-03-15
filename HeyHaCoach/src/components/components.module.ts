import { NgModule } from '@angular/core';
import { DueToRemindListComponent } from './due-to-remind-list/due-to-remind-list';
import { IonicModule } from 'ionic-angular';

import { BrowserModule } from '@angular/platform-browser';
import { SubTitleComponent } from './sub-title/sub-title';
import { NewsListComponent } from './news-list/news-list';
import { NewsDetailComponent } from './news-detail/news-detail';
import { NewsListThumbComponent } from './news-list-thumb/news-list-thumb';
import { ClassListComponent } from './class-list/class-list';
import { RemindListAllComponent } from './remind-list-all/remind-list-all';

@NgModule({
	declarations: [DueToRemindListComponent,
    SubTitleComponent,
    NewsListComponent,
    NewsDetailComponent,
    NewsListThumbComponent,
    ClassListComponent,
    RemindListAllComponent],
	imports: [BrowserModule, IonicModule],
	exports: [DueToRemindListComponent,
    SubTitleComponent,
    NewsListComponent,
    NewsDetailComponent,
    NewsListThumbComponent,
    ClassListComponent,
    RemindListAllComponent]
})
export class ComponentsModule {}
