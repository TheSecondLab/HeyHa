import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { StHomePage } from '../sthome/home';
// import { MinePage } from '../mine/mine';
// import { TrainPage } from '../train/train';
// import { ClassDynamicListPage } from '../class-dynamic-list/class-dynamic-list';


@IonicPage()
@Component({
  templateUrl: 'st-tabs.html'
})
export class StTabsPage {

  tab1Root = StHomePage;
  // tab2Root = TrainPage;
  // tab3Root = ClassDynamicListPage;
  // tab4Root = MinePage;
  tab2Root = StHomePage;
  tab3Root = StHomePage;
  tab4Root = StHomePage;

  constructor() {

  }
}
