import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { HomePage } from '../home/home';
import { MinePage } from '../mine/mine';
import { TrainPage } from '../train/train';
import { ClassDynamicListPage } from '../class-dynamic-list/class-dynamic-list';

// import {CourseDetailPage} from  '../course-detail/course-detail';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TrainPage;
  tab3Root = ClassDynamicListPage;
  tab4Root = MinePage;

  constructor() {

  }
}
