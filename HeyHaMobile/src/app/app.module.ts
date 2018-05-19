import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { JPush } from '@jiguang-ionic/jpush';
import {JmessageChenyu} from "jmessage-chenyu";
import { Camera } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject }from'@ionic-native/file-transfer';
import { File, FileEntry } from '@ionic-native/file';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { FilePath } from '@ionic-native/file-path';

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
import { ChatPageModule } from '../pages/chat/chat.module';
import { ClassDueStudentPageModule } from '../pages/class-due-student/class-due-student.module';
import { CourseDetailPageModule } from '../pages/course-detail/course-detail.module';
import { SearchStudentPageModule } from '../pages/search-student/search-student.module';
import { CourseProgressPageModule } from '../pages/course-progress/course-progress.module';
import { CourseProgressListPageModule } from '../pages/course-progress-list/course-progress-list.module';

// 根组件
import { MyApp } from './app.component';

import { MinePage } from '../pages/mine/mine';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { StHomePage } from '../pages/sthome/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { StTabsPage } from '../pages/stTabs/stTabs';
import { StTabsPageModule } from '../pages/stTabs/stTabs.module';
import { StuImformationPage } from '../pages/stu-imformation/stu-imformation';
import { DueDateStuPage } from '../pages/due-date-stu/due-date-stu';
import { SettingPage } from '../pages/setting/setting';
import { ExerciseTasksPage } from '../pages/exercise-tasks/exercise-tasks';
import { ExerciseTasksListPage } from '../pages/exercise-tasks-list/exercise-tasks-list';
import { ClassDynamicPage } from '../pages/class-dynamic/class-dynamic';
import { ClassDynamicListPage } from '../pages/class-dynamic-list/class-dynamic-list';
import { ModifiedPasswordPage } from '../pages/modified-password/modified-password';
import { ModalPostPageComponent } from '../components/modal-post-page/modal-post-page';
import { PostClassMessageComponent } from '../components/post-class-message/post-class-message';
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
import { ChatPage } from '../pages/chat/chat';
import { ClassDueStudentPage } from '../pages/class-due-student/class-due-student';
import { CourseDetailPage } from '../pages/course-detail/course-detail';
import { SearchStudentPage } from '../pages/search-student/search-student';
import { CourseProgressPage } from '../pages/course-progress/course-progress';
import { CourseProgressListPage } from '../pages/course-progress-list/course-progress-list';
import { MyPointPageModule } from '../pages/my-point/my-point.module';
import { MyPointPage } from '../pages/my-point/my-point';
import { EventsPage } from '../pages/events/events';
import { EventsPageModule } from '../pages/events/events.module';
import { StMyChatPageModule } from '../pages/st-my-chat/st-my-chat.module';
import { StMyChatPage } from '../pages/st-my-chat/st-my-chat';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CallNumber } from '@ionic-native/call-number';

import { BaseService } from '../module/baseService.service';
import { Utils } from '../module/util';
import { MultipleUpLoadService } from '../module/multipleUpdate.service';
import { UpLoadService } from '../module/uploadService.service';
import { IMService } from '../module/imService.service';
import { AlertService } from '../module/alertService.service';

@NgModule({
  declarations: [ // 声明组件
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    StHomePage,
    ExerciseTasksPage,
    ExerciseTasksListPage,
    ClassDynamicPage,
    TaskPage,
    MinePage,
    LoginPage
  ],
  imports: [ // 依赖的模块
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    MyPointPageModule,
    EventsPageModule,
    StMyChatPageModule,
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
    TabsPageModule,
    StTabsPageModule,
    ChatPageModule,
    ClassDueStudentPageModule,
    CourseDetailPageModule,
    SearchStudentPageModule,
    CourseProgressPageModule,
    CourseProgressListPageModule
  ],
  bootstrap: [IonicApp], // 启动模块
  entryComponents: [ // 不会在模板中使用的组件
    MyApp,
    AboutPage,
    EventsPage,
    ContactPage,
    MyPointPage,
    HomePage,
    StMyChatPage,
    MinePage,
    StHomePage,
    TabsPage,
    StTabsPage,
    StuImformationPage,
    DueDateStuPage,
    SettingPage,
    ExerciseTasksPage,
    ExerciseTasksListPage,
    ClassDynamicPage,
    ClassDynamicListPage,
    ModifiedPasswordPage,
    ModalPostPageComponent,
    PostClassMessageComponent,
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
    LoginPage,
    ChatPage,
    ClassDueStudentPage,
    CourseDetailPage,
    SearchStudentPage,
    CourseProgressPage,
    CourseProgressListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClientModule,
    JPush,
    JmessageChenyu,
    AndroidPermissions,
    BaseService,
    Utils,
    MultipleUpLoadService,
    UpLoadService,
    AlertService,
    IMService,
    Camera,
    FileTransferObject,
    FileTransfer,
    FilePath,
    File
  ]
})
export class AppModule {}
