import { Component } from '@angular/core';

import { EventsPage } from '../events/events'
import { HomePage } from '../home/home';
import { MinePage } from '../mine/mine';
import { TrainPage } from '../train/train';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TrainPage;
  tab3Root = EventsPage;
  tab4Root = MinePage;

  constructor() {

  }
}
