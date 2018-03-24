import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { StuImformationPage } from '../stu-imformation/stu-imformation';
// import { DueDateStuPage } from '../due-date-stu/due-date-stu';
// import { SettingPage } from '../setting/setting';
// import { ExerciseTasksPage } from '../exercise-tasks/exercise-tasks';
// import { ExerciseTasksListPage } from '../exercise-tasks-list/exercise-tasks-list';
import { ClassDynamicPage } from '../class-dynamic/class-dynamic';
// import { ClassDynamicListPage } from '../class-dynamic-list/class-dynamic-list';
// import { ModifiedPassworkPage } from '../modified-passwork/modified-passwork';
// import { PostTraceRecordPage } from '../post-trace-record/post-trace-record';
// import { MyChatPage } from '../my-chat/my-chat';
// import { TaskDetailPage } from '../task-detail/task-detail';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = StuImformationPage;
  tab3Root = ClassDynamicPage;
  tab4Root = AboutPage;
  // tab5Root = DueDateStuPage;
  // tab6Root = SettingPage;
  // tab7Root = ExerciseTasksPage;
  // tab8Root = ExerciseTasksListPage;
  // tab9Root = ClassDynamicPage;
  // tab10Root = ClassDynamicListPage;
  // tab11Root = ModifiedPassworkPage;
  // tab12Root = PostTraceRecordPage;
  // tab13Root = MyChatPage;
  // tab14Root = TaskDetailPage;

  constructor() {

  }
}
