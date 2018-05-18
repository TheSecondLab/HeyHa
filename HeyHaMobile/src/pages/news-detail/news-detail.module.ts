import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsDetailPage } from './news-detail';
import { NewsDetailComponent } from '../../components/news-detail/news-detail'
@NgModule({
  declarations: [
    NewsDetailPage,
    NewsDetailComponent
  ],
  imports: [
    IonicPageModule.forChild(NewsDetailPage),
  ],
})
export class NewsDetailPageModule {}
