import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

// 自定义组件
import { ComponentsModule } from '../components/components.module';

// 根组件
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StuImformationPage } from '../pages/stu-imformation/stu-imformation';
import { DueDateStuPage } from '../pages/due-date-stu/due-date-stu';
import { SettingPage } from '../pages/setting/setting';
import { ExerciseTasksPage } from '../pages/exercise-tasks/exercise-tasks';
import { ExerciseTasksListPage } from '../pages/exercise-tasks-list/exercise-tasks-list';
import { ClassDynamicPage } from '../pages/class-dynamic/class-dynamic';
import { ClassDynamicListPage } from '../pages/class-dynamic-list/class-dynamic-list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [ // 声明组件
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
    ClassDynamicListPage
  ],
  imports: [ // 依赖的模块
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp)
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
    ClassDynamicListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
