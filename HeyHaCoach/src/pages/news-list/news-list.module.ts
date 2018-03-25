import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsListPage } from './news-list';
import { NewsListComponent } from '../../components/news-list/news-list'
@NgModule({
  declarations: [
    NewsListPage,
    NewsListComponent
  ],
  imports: [
    IonicPageModule.forChild(NewsListPage),
  ],
})
export class NewsListPageModule {}
