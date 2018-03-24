import { Component } from '@angular/core';

/**
 * Generated class for the SubTitleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sub-title',
  templateUrl: 'sub-title.html'
})
export class SubTitleComponent {

  title: string;


  constructor() {

    this.title = '热点资讯';

  }

}
