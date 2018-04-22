import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

/**
 * Generated class for the NewsDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'news-detail',
  templateUrl: 'news-detail.html'
})
export class NewsDetailComponent {

  articleData: any;

  constructor(private navParams: NavParams) {
    this.articleData = this.navParams.get('item');
  }

}
