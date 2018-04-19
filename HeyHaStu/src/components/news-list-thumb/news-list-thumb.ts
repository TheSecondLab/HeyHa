import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

interface listItem {
  cover: string,
  name: string,
  releasetimeStr: string,
  id: number
  // source: string
}
@Component({
  selector: 'news-list-thumb',
  templateUrl: 'news-list-thumb.html'
})
export class NewsListThumbComponent {

  newsList = [];
  @Input() list: listItem[];


  constructor(public navCtrl: NavController) {

  }

  ngOnChanges(changes) {
    this.newsList = changes.list.currentValue;

  }

  goNewsList(item) {
    console.log(item);
    this.navCtrl.push("NewsDetailPage", {
      item
    });
  }

}
