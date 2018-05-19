import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { StHomePage } from '../sthome/home';
import { MinePage } from '../mine/mine';
import { TrainPage } from '../train/train';
import { StClassDynamicListPage } from '../st-class-dynamic-list/st-class-dynamic-list';


@IonicPage()
@Component({
  templateUrl: 'st-tabs.html'
})
export class StTabsPage {

  tab1Root = StHomePage;
  tab2Root = TrainPage;
  tab3Root = StClassDynamicListPage;
  tab4Root = MinePage;

  constructor() {

  }
}
