import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the SubTitleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'st-sub-title',
  templateUrl: 'sub-title.html'
})
export class StSubTitleComponent {

  @Input() title: string;
  @Input() btnText: string;
  @Input() noText: string;
  @Output() onTitleClick = new EventEmitter()

  constructor(public navCtrl: NavController) {
  }

  titleClick() {
    this.onTitleClick.emit();
  }

}
