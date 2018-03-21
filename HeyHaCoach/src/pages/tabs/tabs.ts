import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { StuImformationPage } from '../stu-imformation/stu-imformation';
import { DueDateStuPage } from '../due-date-stu/due-date-stu';
import { SettingPage } from '../setting/setting';
import { ExerciseTasksPage } from '../exercise-tasks/exercise-tasks';
import { ExerciseTasksListPage } from '../exercise-tasks-list/exercise-tasks-list';
import { ClassDynamicPage } from '../class-dynamic/class-dynamic';
import { ClassDynamicListPage } from '../class-dynamic-list/class-dynamic-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = StuImformationPage;
  tab5Root = DueDateStuPage;
  tab6Root = SettingPage;
  tab7Root = ExerciseTasksPage;
  tab8Root = ExerciseTasksListPage;
  tab9Root = ClassDynamicPage;
  tab10Root = ClassDynamicListPage;

  constructor() {

  }
}
