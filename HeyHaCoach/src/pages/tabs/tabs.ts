import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { StuImformationPage } from '../stu-imformation/stu-imformation';
import { DueDateStuPage } from '../due-date-stu/due-date-stu';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = StuImformationPage;
  tab5Root = DueDateStuPage;

  constructor() {

  }
}
