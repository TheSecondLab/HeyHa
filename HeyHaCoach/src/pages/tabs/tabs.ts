import { Component, Host } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ClassDynamicPage } from '../class-dynamic/class-dynamic';
import { TaskPage } from '../task/task';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TaskPage;
  tab3Root = ClassDynamicPage;
  tab4Root = AboutPage;

  constructor() {

  }
}
