import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the NewListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'news-list',
  templateUrl: 'news-list.html'
})
export class NewsListComponent {

  newsList = [];
  @Input() list;

  constructor(public navCtrl: NavController) {
    
  }

  ngOnChanges(changes) {
    this.newsList = changes.list.currentValue;

  }

  navTo(item) {
    this.navCtrl.push('NewsDetailPage', {
      item
    });
  }

}
