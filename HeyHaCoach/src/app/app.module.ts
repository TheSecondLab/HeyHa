import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { JPush } from '@jiguang-ionic/jpush';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

// 自定义组件
import { ComponentsModule } from '../components/components.module';
import { StuImformationPageModule } from '../pages/stu-imformation/stu-imformation.module';
import { SettingPageModule } from '../pages/setting/setting.module';
import { ModifiedPasswordPageModule } from '../pages/modified-password/modified-password.module';
import { ClassDynamicListPageModule } from '../pages/class-dynamic-list/class-dynamic-list.module';
import { TaskListPageModule } from '../pages/task-list/task-list.module';
import { DueDateStuPageModule } from '../pages/due-date-stu/due-date-stu.module';
import { NewsListPageModule } from '../pages/news-list/news-list.module';
import { StuListPageModule } from '../pages/stu-list/stu-list.module';
import { MyChatPageModule } from '../pages/my-chat/my-chat.module';
import { MyClassPageModule } from '../pages/my-class/my-class.module';
import { MyFilePageModule } from '../pages/my-file/my-file.module';
import { CourseSystemPageModule } from '../pages/course-system/course-system.module';
import { NewsDetailPageModule } from '../pages/news-detail/news-detail.module';
import { TaskDetailPageModule } from '../pages/task-detail/task-detail.module';
import { PersonalInfoPageModule } from '../pages/personal-info/personal-info.module';
import { PostTraceRecordPageModule } from '../pages/post-trace-record/post-trace-record.module';


// 根组件
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { StuImformationPage } from '../pages/stu-imformation/stu-imformation';
import { DueDateStuPage } from '../pages/due-date-stu/due-date-stu';
import { SettingPage } from '../pages/setting/setting';
import { ExerciseTasksPage } from '../pages/exercise-tasks/exercise-tasks';
import { ExerciseTasksListPage } from '../pages/exercise-tasks-list/exercise-tasks-list';
import { ClassDynamicPage } from '../pages/class-dynamic/class-dynamic';
import { ClassDynamicListPage } from '../pages/class-dynamic-list/class-dynamic-list';
import { ModifiedPasswordPage } from '../pages/modified-password/modified-password';
import { ModalPostPageComponent } from '../components/modal-post-page/modal-post-page';
import { PostTraceRecordPage } from '../pages/post-trace-record/post-trace-record';
import { MyChatPage } from '../pages/my-chat/my-chat';
import { TaskDetailPage } from '../pages/task-detail/task-detail';
import { CourseSystemPage } from '../pages/course-system/course-system';
import { TaskPage } from '../pages/task/task';
import { TaskListPage } from '../pages/task-list/task-list';
import { NewsListPage } from '../pages/news-list/news-list';
import { StuListPage } from '../pages/stu-list/stu-list';
import { MyClassPage } from '../pages/my-class/my-class';
import { MyFilePage } from '../pages/my-file/my-file';
import { NewsDetailPage } from '../pages/news-detail/news-detail';
import { PersonalInfoPage } from '../pages/personal-info/personal-info';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [ // 声明组件
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    // TabsPage,
    ExerciseTasksPage,
    ExerciseTasksListPage,
    ClassDynamicPage,
    // PostTraceRecordPage,
    // TaskDetailPage,
    TaskPage,
    LoginPage
  ],
  imports: [ // 依赖的模块
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: 'true'
     }),
    StuImformationPageModule,
    SettingPageModule,
    ModifiedPasswordPageModule,
    ClassDynamicListPageModule,
    TaskListPageModule,
    DueDateStuPageModule,
    NewsListPageModule,
    StuListPageModule,
    MyChatPageModule,
    MyClassPageModule,
    MyFilePageModule,
    CourseSystemPageModule,
    NewsDetailPageModule,
    TaskDetailPageModule,
    PersonalInfoPageModule,
    PostTraceRecordPageModule,
    TabsPageModule
  ],
  bootstrap: [IonicApp], // 启动模块
  entryComponents: [ // 不会在模板中使用的组件
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    StuImformationPage,
    DueDateStuPage,
    SettingPage,
    ExerciseTasksPage,
    ExerciseTasksListPage,
    ClassDynamicPage,
    ClassDynamicListPage,
    ModifiedPasswordPage,
    ModalPostPageComponent,
    PostTraceRecordPage,
    MyChatPage,
    CourseSystemPage,
    TaskPage,
    TaskListPage,
    NewsListPage,
    StuListPage,
    MyClassPage,
    MyFilePage,
    NewsDetailPage,
    TaskDetailPage,
    PersonalInfoPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JPush,
    Push
  ]
})
export class AppModule {}
