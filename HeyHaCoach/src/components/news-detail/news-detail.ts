import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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
  }


}
